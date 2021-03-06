DELETE FROM product
  WHERE product_id = $1;

-- delete_product.sql:
--   The SQL should be able to delete a specific product from the products table.
--   The SQL should use a parameter to find the product whose product_id matches.