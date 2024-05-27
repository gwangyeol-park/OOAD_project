package com.OOAD.demo.Service;

import com.OOAD.demo.Entity.RecruitmentItem;
import com.OOAD.demo.Repository.RecruitmentItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RecruitmentItemService {

    private final RecruitmentItemRepository itemRepository;
    public List<RecruitmentItem> getAllItem() {
        return itemRepository.findAll();
    }

    public Optional<RecruitmentItem> getItemById(String id) {
        return itemRepository.findById(id);
    }

    public RecruitmentItem createItem(RecruitmentItem item) {
        return itemRepository.save(item);
    }

    public RecruitmentItem updateItem(String id, RecruitmentItem item) {
        item.setId(id);
        return itemRepository.save(item);
    }

    public void deleteById(String id) {
        itemRepository.deleteById(id);
    }
}
