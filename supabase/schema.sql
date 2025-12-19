-- Create the cards table
create table cards (
  id uuid default gen_random_uuid() primary key,
  slug text not null unique,
  to_name text,
  from_name text,
  message text not null,
  theme text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create an index on slug for faster lookups
create index cards_slug_idx on cards (slug);

-- Enable Row Level Security (RLS)
alter table cards enable row level security;

-- Create policies
-- Allow anyone to create a card (public insert)
create policy "Enable insert for all users" on cards
  for insert with check (true);

-- Allow anyone to read a card (public select)
create policy "Enable read access for all users" on cards
  for select using (true);
