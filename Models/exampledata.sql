TRUNCATE TABLE "Tools" RESTART IDENTITY;

INSERT INTO "Tools" ("Name", "Price", "Owner", "ImageUrl", "rent", "borrow", "purchase", "IsAvailable")
VALUES
('Hammer Drill', 39.99, 'John Smith', 'https://images.pexels.com/photos/3073/drill-technology-electric-metal.jpg', true, false, true),
('Miter Saw', 149.99, 'Jane Doe', 'https://cdn.pixabay.com/photo/2016/03/05/21/34/saw-1239017_1280.jpg', true, false, true),
('Circular Saw', 49.99, 'Bob Johnson', 'https://cdn.pixabay.com/photo/2019/11/13/10/17/skilsaw-5166-4623181_1280.jpg', true, true, false),
('Jigsaw', 29.99, 'Alice Smith', 'https://cdn.pixabay.com/photo/2020/06/05/20/19/board-5264378_1280.jpg', false, true, false),
('Table Saw', 199.99, 'John Smith', 'https://cdn.pixabay.com/photo/2015/03/10/13/51/saw-667135_1280.jpg', true, false, true),


INSERT INTO "Tools" ("Name", "Price", "Owner", "ImageUrl", "rent", "borrow", "purchase", "IsAvailable")
VALUES
('Band Saw', 119.99, 'Jane Doe', 'https://cdn.pixabay.com/photo/2018/05/26/20/27/band-saw-3432183_1280.jpg', false, true, false, true),
('Drill Press', 129.99, 'Bob Johnson', 'https://cdn.pixabay.com/photo/2020/06/18/18/49/drill-press-5314646_1280.jpg',  false, true, false, true),
('Router', 69.99, 'Alice Smith', 'https://cdn.pixabay.com/photo/2016/02/29/21/21/carving-1229263__480.jpg', true, false, true, false),
('Planer', 299.99, 'John Smith', 'https://cdn.pixabay.com/photo/2015/04/09/23/31/planer-715463_1280.jpg', true, true, true, false),
('Jointer', 449.99, 'Jane Doe', 'https://www.rockler.com/media/catalog/product/cache/5c5edcf249a74e99ece620285918bb9b/1/7/1791279DXK_main-1000.jpg', true, false, false, true);