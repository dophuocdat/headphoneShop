SELECT *
FROM product p
    INNER JOIN brand b ON b.brand_id = p.brand_id
WHERE (
   b.brand_name
)
  