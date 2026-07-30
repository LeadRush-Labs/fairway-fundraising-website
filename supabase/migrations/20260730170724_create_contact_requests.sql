CREATE TABLE contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  organization text,
  email text NOT NULL,
  phone text,
  tournament_name text,
  tournament_date date,
  help_with text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_contact_requests" ON contact_requests
  FOR INSERT TO anon, authenticated WITH CHECK (true);
