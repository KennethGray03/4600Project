package com.example.demo.services;

import com.example.demo.entity.Item; // Import Item class from the entity package
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
    private List<Item> items = new ArrayList<>();

    public ItemService() {
        // Initialize items
        items.add(new Item("1", "Trekking Backpack", "High-quality trekking backpack suitable for multi-day hikes. Spacious compartments and ergonomic design for comfort on long journeys.", 30));
        items.add(new Item("2", "Mountain Bike", "Top-of-the-line mountain bike perfect for rugged trails and off-road adventures. Features premium suspension and durable construction.", 40));
        items.add(new Item("3", "Camping Tent", "Spacious camping tent suitable for families or group camping trips. Waterproof and easy to set up, providing comfort and protection in the wilderness.", 50));
    }

    public List<Item> getAllItems() {
        return items;
    }

    public Item getItemById(String itemId) {
        for (Item item : items) {
            if (item.getId().equals(itemId)) {
                return item;
            }
        }
        // If item with the specified ID is not found, return null
        return null;
    
    }

    
}
