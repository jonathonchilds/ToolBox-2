TRUNCATE TABLE "Tools" RESTART IDENTITY;

INSERT INTO "Tools" (Name, Description, Price, ImageUrl, Owner, IsAvailable, CanBeRented, CanBePurchased, CanBeBorrowed)
VALUES
('Hammer Drill', 'Cordless hammer drill with variable speed control', 39.99, 'https://images.pexels.com/photos/3073/drill-technology-electric-metal.jpg', 'John Smith', 1, 1, 1, 1),
('Miter Saw', '12-inch compound miter saw with laser guide', 149.99, 'https://images.pexels.com/photos/2941570/pexels-photo-2941570.jpeg', 'Jane Doe', 0, 1, 1, 0),
('Circular Saw', '7-1/4 inch corded circular saw with laser guide', 49.99, 'https://images.pexels.com/photos/4109955/pexels-photo-4109955.jpeg', 'Bob Johnson', 1, 1, 1, 1),
('Jigsaw', 'Cordless jigsaw with variable speed control', 29.99, 'https://images.pexels.com/photos/5742700/pexels-photo-5742700.jpeg', 'Alice Smith', 0, 1, 1, 0),
('Table Saw', '10-inch benchtop table saw with folding stand', 199.99, 'https://images.pexels.com/photos/357809/pexels-photo-357809.jpeg', 'John Smith', 1, 1, 1, 1),
('Band Saw', '9-inch benchtop band saw with LED work light', 119.99, 'https://images.pexels.com/photos/2962957/pexels-photo-2962957.jpeg', 'Jane Doe', 1, 1, 1, 0),
('Drill Press', '10-inch benchtop drill press with laser guide', 129.99, 'https://images.pexels.com/photos/3119/drill-press-drill.jpg', 'Bob Johnson', 1, 1, 1, 0),
('Router', 'Corded wood router with variable speed control', 69.99, 'https://images.pexels.com/photos/1322521/pexels-photo-1322521.jpeg', 'Alice Smith', 0, 1, 1, 0),
('Planer', '13-inch benchtop planer with dual-blade cutterhead', 299.99, 'https://images.pexels.com/photos/4037008/pexels-photo-4037008.jpeg', 'John Smith', 1, 1, 1, 0),
('Jointer', '6-inch benchtop jointer with spiral cutterhead', 449.99, 'https://images.pexels.com/photos/1742517/pexels-photo-1742517.jpeg', 'Jane Doe', 0, 1, 1, 0),






