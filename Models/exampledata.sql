TRUNCATE TABLE "Tools" RESTART IDENTITY;

INSERT INTO "Tools" ("Name", "ImageUrl", "Rent", "RentPrice", "Borrow", "BorrowPrice", "Purchase", "PurchasePrice")
VALUES
('Hammer Drill', 'https://images.pexels.com/photos/3073/drill-technology-electric-metal.jpg', true, 29.99, false, 0, true, 49.99),
('Miter Saw', 'https://cdn.pixabay.com/photo/2016/03/05/21/34/saw-1239017_1280.jpg', true, 59.99, false, 0, true, 149.99),
('Circular Saw', 'https://cdn.pixabay.com/photo/2019/11/13/10/17/skilsaw-5166-4623181_1280.jpg', true, 19.99, true, 0, false, 49.99),
('Jigsaw', 'https://cdn.pixabay.com/photo/2020/06/05/20/19/board-5264378_1280.jpg', false, 0, true, 9.99, false, 0),
('Table Saw', 'https://cdn.pixabay.com/photo/2015/03/10/13/51/saw-667135_1280.jpg', true, 99.99, false, 0, true, 199.99),
('Band Saw', 'https://cdn.pixabay.com/photo/2018/05/26/20/27/band-saw-3432183_1280.jpg', false, 0, true, 19.99, false, 0),
('Drill Press', 'https://cdn.pixabay.com/photo/2020/06/18/18/49/drill-press-5314646_1280.jpg', false, 0, true, 14.99, false, 0),
('Router', 'https://cdn.pixabay.com/photo/2016/02/29/21/21/carving-1229263__480.jpg', true, 39.99, false, 0, true, 69.99),
('Planer', 'https://cdn.pixabay.com/photo/2015/04/09/23/31/planer-715463_1280.jpg', true, 149.99, true, 19.99, true, 299.99),
('Jointer', 'https://www.rockler.com/media/catalog/product/cache/5c5edcf249a74e99ece620285918bb9b/1/7/1791279DXK_main-1000.jpg', true, 249.99, false, 0, false, 0);