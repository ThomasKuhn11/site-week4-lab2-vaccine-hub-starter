-- Prompt user for confirmation to delete and recreate the database
-- You can customize the prompt message as per your requirements
\echo 'Are you sure you want to delete and recreate the vaccine_hub database?'
\prompt 'Return for yes and ctrl c to cancel > ' answer

DROP DATABASE vaccine_hub;

  -- Create a fresh vaccine_hub database
CREATE DATABASE vaccine_hub;

\connect vaccine_hub;

\i vaccine-hub-schema.sql 
