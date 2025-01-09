/*
  # Create blog posts table

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `cover_image` (text, optional)
      - `published_at` (timestamp with time zone)
      - `updated_at` (timestamp with time zone)
  
  2. Security
    - Enable RLS on `posts` table
    - Add policy for public read access
    - Add policy for authenticated admin write access using email
*/

CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  cover_image text,
  published_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Posts are viewable by everyone"
  ON posts
  FOR SELECT
  TO public
  USING (true);

-- Allow write access only for specific admin email
CREATE POLICY "Only admin can modify posts"
  ON posts
  FOR ALL
  TO authenticated
  USING (auth.email() = 'max.mundhenke@gmx.de')
  WITH CHECK (auth.email() = 'max.mundhenke@gmx.de');