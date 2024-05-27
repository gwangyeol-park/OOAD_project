package com.OOAD.demo.Repository;

import com.OOAD.demo.Entity.RecruitmentItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruitmentItemRepository extends MongoRepository<RecruitmentItem, String> {
}
