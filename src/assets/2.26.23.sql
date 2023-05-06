DROP DATABASE PrsBackendAPI7

CREATE DATABASE PrsBackendAPI7


USE PrsBackendAPI7
BULK INSERT dbo.[User]
FROM 'C:\Users\peter\prs\prsTables\prs-data-users.csv'
WITH
(
	FORMAT = 'CSV',	
	ROWTERMINATOR = '0x0a',	
	FIRSTROW = 2
);

DELETE FROM [User]

DROP TABLE [User]

SELECT * FROM [User]



BULK INSERT [dbo].[Vendor]
FROM 'C:\Users\peter\prs\prsTables\prs-data-vendors.csv'
WITH
(
	FORMAT = 'CSV',	
	ROWTERMINATOR = '0x0a',	
	FIRSTROW = 2
);

DELETE FROM dbo.Vendor

DROP TABLE Vendor

SELECT * FROM Vendor



BULK INSERT [dbo].[Product]
FROM 'C:\Users\peter\prs\prsTables\prs-data-products.csv'
WITH
(
	FORMAT = 'CSV',	
	ROWTERMINATOR = '0x0a',	
	FIRSTROW = 2
);

SELECT * FROM Product

DROP TABLE Product

BULK INSERT [dbo].[Request]
FROM 'C:\Users\peter\prs\prsTables\prs-data-requests.csv'
WITH
(
	FORMAT = 'CSV',	
	ROWTERMINATOR = '0x0a',	
	FIRSTROW = 2
);

SELECT * FROM Request


DROP TABLE Request

ALTER TABLE Request
ALTER COLUMN Justification NVARCHAR(150)

ALTER TABLE Request
ALTER COLUMN DateNeeded Date

ALTER TABLE Request
ALTER COLUMN SubmittedDate Date

ALTER TABLE Request
ADD CONSTRAINT DefaultRequestSubmittedDate DEFAULT GETDATE() FOR SubmittedDate;

ALTER TABLE Request
ADD CONSTRAINT DefaultRequestDeliveryMode DEFAULT 'In-Store Pickup' FOR DeliveryMode;

ALTER TABLE Request
ADD CONSTRAINT DefaultRequestStatus DEFAULT 'PENDING' FOR Status;

ALTER TABLE Request
ADD CONSTRAINT DefaultRequestTotal DEFAULT 0 FOR Total;

BULK INSERT [dbo].[RequestLine]
FROM 'C:\Users\peter\prs\prsTables\prs-data-requestLines.csv'
WITH
(
	FORMAT = 'CSV',	
	ROWTERMINATOR = '0x0a',	
	FIRSTROW = 2
);

SELECT * FROM RequestLine

DROP TABLE RequestLine

ALTER TABLE RequestLine
ADD CONSTRAINT DefaultRequestLineQuantity DEFAULT 1 FOR Quantity;

