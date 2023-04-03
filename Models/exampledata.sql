TRUNCATE TABLE "Tools" RESTART IDENTITY;
/*PRICES ENTERED AS "CENT" VALUES */
INSERT INTO "Tools" ("Name", "ImageUrl", "Rent", "RentPrice", "Borrow", "BorrowPrice", "Purchase", "PurchasePrice")
VALUES
('Hammer Drill', 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86aG9tZWRlcG90/35300c25-c9d5-5939-8871-794d33d650a2', true, 1000, false, 0, true, 14999),
('Miter Saw', 'https://wac.edgecastcdn.net/001A39/prod/media/6f2iIJdfiy1XrhEsite/032ed1278d466625ec1e8bf5f3ca514b_1646358209481_0_L1800.jpeg', true, 2500, false, 0, true, 14999),
('Circular Saw', 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86aG9tZWRlcG90/8da9d9fa-64d3-567d-a260-97243bf3c902', true, 1999, true, 0, false, 4999),
('Jigsaw', 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bWlsd2F1a2VldG9vbA/83e747ae-ecdd-502a-ac57-0e020fb05dc0', false, 0, true, 950, false, 0),
('Table Saw', 'https://wac.edgecastcdn.net/001A39/prod/media/6f2iIJdfiy1XrhEsite/7c9f6b1440bbe90a348ae87c8ee84e1f_1663721728542_3_L1800.jpeg', true, 9999, false, 0, true, 119999),
('Band Saw', 'https://wac.edgecastcdn.net/001A39/prod/media/6f2iIJdfiy1XrhEsite/55f148a6ab1189faca12ff3c4ca85480_1600127218463_0_L1800.jpeg', false, 0, true, 2000, false, 0),
('Drill Press', 'https://wac.edgecastcdn.net/001A39/prod/media/6f2iIJdfiy1XrhEsite/3AAF90EE53A0E3E4D582DEA0FDC12638.app1_1509850042166_L1800.jpeg', false, 0, true, 1499, false, 0),
('Router', 'https://wac.edgecastcdn.net/001A39/prod/media/6f2iIJdfiy1XrhEsite/C471CE1BBCAFE46FA34032B991B13948.app1_1472670677282-2_L1800.jpeg', true, 2000, false, 0, true, 10000),
('Planer', 'https://wac.edgecastcdn.net/001A39/prod/media/6f2iIJdfiy1XrhEsite/278D204B5A5F7A66BA25278523AEA6FC.app1_1573864876572_L1800.jpeg', true, 15000, true, 10000, true, 150000),
('Jointer', 'https://wac.edgecastcdn.net/001A39/prod/media/6f2iIJdfiy1XrhEsite/FF191CFA1B1C974ACE5A2E1918CEBA13.app1_1459394737736_L1800.jpeg', true, 15000, false, 0, false, 0);