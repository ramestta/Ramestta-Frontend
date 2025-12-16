/*
  # Create Ramestta Platform Tables

  1. New Tables
    - `price_platforms`
      - `id` (uuid, primary key)
      - `name` (text) - Platform name (e.g., CoinGecko, Binance)
      - `url` (text) - Platform URL
      - `icon_url` (text) - Platform logo URL
      - `display_order` (integer) - Order for displaying platforms
      - `is_active` (boolean) - Whether to show this platform
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `rama_prices`
      - `id` (uuid, primary key)
      - `platform_id` (uuid, foreign key to price_platforms)
      - `price_usd` (numeric) - Current price in USD
      - `price_inr` (numeric) - Current price in INR
      - `change_24h` (numeric) - 24-hour price change percentage
      - `volume_24h` (numeric) - 24-hour trading volume
      - `market_cap` (numeric) - Market capitalization
      - `recorded_at` (timestamptz) - When the price was recorded
      - `created_at` (timestamptz)
    
    - `news_sources`
      - `id` (uuid, primary key)
      - `name` (text) - News source name (e.g., Yahoo Finance, Forbes)
      - `url` (text) - Source website URL
      - `logo_url` (text) - Source logo URL
      - `display_order` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `news_articles`
      - `id` (uuid, primary key)
      - `source_id` (uuid, foreign key to news_sources)
      - `title` (text) - Article headline
      - `description` (text) - Article summary
      - `url` (text) - Link to full article
      - `published_at` (timestamptz) - Publication date
      - `image_url` (text) - Article image
      - `is_featured` (boolean) - Featured article flag
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `blog_posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL-friendly identifier
      - `title` (text) - Post title
      - `excerpt` (text) - Short summary
      - `content` (text) - Full post content (markdown)
      - `author` (text) - Author name
      - `category` (text) - Post category
      - `read_time` (text) - Estimated read time
      - `image_url` (text) - Featured image
      - `tags` (text[]) - Array of tags
      - `is_featured` (boolean) - Featured post flag
      - `is_published` (boolean) - Publication status
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for all tables
    - Admin-only write access (will be managed through admin panel)
*/

-- Price Platforms Table
CREATE TABLE IF NOT EXISTS price_platforms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  icon_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- RAMA Prices Table
CREATE TABLE IF NOT EXISTS rama_prices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id uuid REFERENCES price_platforms(id) ON DELETE CASCADE,
  price_usd numeric(20, 8),
  price_inr numeric(20, 8),
  change_24h numeric(10, 4),
  volume_24h numeric(20, 2),
  market_cap numeric(20, 2),
  recorded_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- News Sources Table
CREATE TABLE IF NOT EXISTS news_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  logo_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- News Articles Table
CREATE TABLE IF NOT EXISTS news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid REFERENCES news_sources(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  url text NOT NULL,
  published_at timestamptz DEFAULT now(),
  image_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  read_time text DEFAULT '5 min read',
  image_url text,
  tags text[] DEFAULT '{}',
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_rama_prices_platform ON rama_prices(platform_id);
CREATE INDEX IF NOT EXISTS idx_rama_prices_recorded_at ON rama_prices(recorded_at DESC);
CREATE INDEX IF NOT EXISTS idx_news_articles_source ON news_articles(source_id);
CREATE INDEX IF NOT EXISTS idx_news_articles_published ON news_articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security
ALTER TABLE price_platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE rama_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access
CREATE POLICY "Anyone can view active price platforms"
  ON price_platforms FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can view rama prices"
  ON rama_prices FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view active news sources"
  ON news_sources FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can view news articles"
  ON news_articles FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (is_published = true);

-- Insert default price platforms
INSERT INTO price_platforms (name, url, icon_url, display_order) VALUES
  ('CoinGecko', 'https://www.coingecko.com/en/coins/ramestta', '/icons/coingecko.svg', 1),
  ('Coinbase', 'https://www.coinbase.com/price/ramestta', '/icons/coinbase.svg', 2),
  ('KuCoin', 'https://www.kucoin.com/price/RAMA', '/icons/kucoin.svg', 3),
  ('Crypto.com', 'https://crypto.com/en/price/ramestta', '/icons/crypto-com.svg', 4),
  ('Binance', 'https://www.binance.com/en-IN/price/ramestta', '/icons/binance.svg', 5),
  ('Bitget', 'https://www.bitget.com/price/ramestta/what-is', '/icons/bitget.svg', 6),
  ('CoinCodex', 'https://coincodex.com/crypto/ramestta/', '/icons/coincodex.svg', 7),
  ('MEXC', 'https://www.mexc.co/en-IN/price/ramestta', '/icons/mexc.svg', 8),
  ('Bybit', 'https://www.bybit.com/en/price/ramestta/', '/icons/bybit.svg', 9),
  ('StockTwits', 'https://stocktwits.com/symbol/RAMA.X', '/icons/stocktwits.svg', 10)
ON CONFLICT DO NOTHING;

-- Insert default news sources
INSERT INTO news_sources (name, url, logo_url, display_order) VALUES
  ('Yahoo Finance', 'https://finance.yahoo.com/quote/RAMA-USD/', '/icons/yahoo-finance.svg', 1),
  ('Forbes', 'https://www.forbes.com/digital-assets/assets/ramestta-rama/', '/icons/forbes.svg', 2),
  ('BitcoinWorld', 'https://bitcoinworld.co.in/title-introducing-ramestta-blockchain-the-next-evolution-in-scalable-and-interoperable-decentralized-finance/', '/icons/bitcoinworld.svg', 3),
  ('HP WWMA', 'https://pdms.hpwwma.org.in/app/RAMA(ramestta)-News-and-Updates', '/icons/hpwwma.svg', 4)
ON CONFLICT DO NOTHING;