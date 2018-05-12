UPDATE product
  SET product_description = $2
  WHERE product_id = $1;

-- update_product.sql:
--   The SQL should be able to update the description of a specific product from the products table.
--   The SQL should use a parameter to find the product whose product_id matches.
--   The SQL should use a parameter to update the value of the description.