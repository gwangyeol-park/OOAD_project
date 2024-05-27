package com.OOAD.demo.Controller;

import com.OOAD.demo.Entity.User;
import com.OOAD.demo.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    // 로그인
    @PostMapping("/login")
    public boolean Login(@RequestBody User user) {
        Optional<User> findUser = userService.getUserByEmail(user.getEmail());
        if (findUser.isEmpty()) {
            return false;
        } else if (user.getPassword().equals(findUser.get().getPassword())) {
                return true;
        }
        return false;
    }

    // 회원가입
    @PostMapping("/signup")
    public void signup(@RequestBody User user) {
        if (userService.getUserByEmail(user.getEmail()).isEmpty()) {
            userService.createUser(user);
        }
    }
}
