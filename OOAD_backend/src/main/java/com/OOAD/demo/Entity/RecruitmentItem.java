package com.OOAD.demo.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Data
@Document(collection = "RecruitmentItem")
public class RecruitmentItem {

    @Id
    private String id;
    private String title;
    private String author;
    private String location;
    private Integer wage;
    private String date;
    private String time;
    private Map<String, String> userList = new HashMap<>();
}
