TRUNCATE TABLE "Tools" RESTART IDENTITY;

INSERT INTO "Tools" ("Name", "Price", "Owner", "ImageUrl", "rent", "borrow", "purchase")
VALUES
('Hammer Drill', 39.99, 'John Smith', 'https://images.pexels.com/photos/3073/drill-technology-electric-metal.jpg', true, false, true),
('Miter Saw', 149.99, 'Jane Doe', 'https://images.pexels.com/photos/2941570/pexels-photo-2941570.jpeg', true, false, true),
('Circular Saw', 49.99, 'Bob Johnson', 'https://images.pexels.com/photos/4109955/pexels-photo-4109955.jpeg', true, true, false),
('Jigsaw', 29.99, 'Alice Smith', 'https://images.pexels.com/photos/5742700/pexels-photo-5742700.jpeg', false, true, false),
('Table Saw', 199.99, 'John Smith', 'https://images.pexels.com/photos/357809/pexels-photo-357809.jpeg', true, false, true);
