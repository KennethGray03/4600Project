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
        items.add(new Item("4", "Sleeping Bag", "An extremely comfortable sleeping bag that will keep you warm even on the coolest nights.", 13));
        items.add(new Item("5", "10X10 Tarp", "A 10 by 10 Tarp that has multifunctional uses such as keeping dry from the rain, a great place to cook, and a great place to keep all of your belongings safe.", 8));
        items.add(new Item("6", "Climbing Shoes", "The best of the best climbing shoes which will automatically make you a better climber. These allow for proper grip and are a necessity for all rock climbers.", 10));
        items.add(new Item("7", "Climbing Helmet", "A must-have for all climbers, as this protects your head from and keeps you safe.", 10));
        items.add(new Item("8", "Hammock", "A strong and sturdy hammock perfect for a day of relaxing out in nature.", 10));
        items.add(new Item("9", "2 Burner camp stove", "A light-weight stove that is very easy to fit inside a backpack. Easily cooks anything that you could need and allows for quick meals while camping.", 12));
        items.add(new Item("10", "Inflatable Kayak", "A great inflatable kayak that is easily blown up. Can easily be taken out on the waters and is extremely durable.", 40));
        items.add(new Item("11", "PFD/Life Jacket", "A personal floatation device that is essential while kayaking or canoeing. Extremely safe and will always protect you.", 10));
        items.add(new Item("12", "Inflatable Paddleboard", "An extraordinarily sturdy and safe paddleboard that will allow for a great experience paddleboarding. Paddle included.", 40));
        items.add(new Item("13", "2 Seater Canoe", "A two-seater canoe that will be great to share with a friend or partner. This is very sturdy and will allow for a great weekend out on the lake. (paddle included)", 50));
        items.add(new Item("14", "Hiking Boots", "A great and comfortable pair of hiking boots that will give you greater support and allow for a better overall hiking experience.", 20));
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
