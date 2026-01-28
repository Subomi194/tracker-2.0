ALTER TABLE routines
DROP CONSTRAINT routines_routine_type_id_fkey;


ALTER TABLE routines
DROP COLUMN routine_type_id;
