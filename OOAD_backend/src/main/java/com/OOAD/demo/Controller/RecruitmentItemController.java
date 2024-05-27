package com.OOAD.demo.Controller;

import com.OOAD.demo.Entity.RecruitmentItem;
import com.OOAD.demo.Service.RecruitmentItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class RecruitmentItemController {

    private final RecruitmentItemService itemService;

    // item 전체조회
    @GetMapping("/items")
    public List<RecruitmentItem> getAllItems() {
        return itemService.getAllItem();
    }

    // item id로 item 조회
    @GetMapping("/items/{id}")
    public Optional<RecruitmentItem> getItemById(@PathVariable String id) {
        return itemService.getItemById(id);
    }

    // item 생성
    @PostMapping("/items")
    public RecruitmentItem createItem(@RequestBody RecruitmentItem item) {
        return itemService.createItem(item);
    }

    // item update
    @PutMapping("/items/{id}")
    public RecruitmentItem updateItem(@PathVariable String id, @RequestBody RecruitmentItem item) {
        return itemService.updateItem(id, item);
    }
}
