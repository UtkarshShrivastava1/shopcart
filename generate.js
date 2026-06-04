const fs = require('fs');

const BRANDS = ['Essentials', 'CoreLabel', 'Urban Thread', 'Elevate', 'Null Void'];
const COLORS = ['Black', 'White', 'Heather Grey', 'Navy', 'Olive', 'Charcoal', 'Burgundy', 'Sand', 'Washed Blue', 'Rust'];
const PATTERNS = ['Solid', 'Striped', 'Graphic Logo', 'Distressed', 'Minimal Font'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

// Unsplash T-Shirt specific images
const IMAGES = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3db8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'
];

function getRandomSubarray(arr, minSize, maxSize) {
    const shuffled = arr.slice(0).sort(() => 0.5 - Math.random());
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    return shuffled.slice(0, size);
}

function generateVariant(prodId, variantIndex) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const pattern = PATTERNS[Math.floor(Math.random() * PATTERNS.length)];
    const availableSizes = getRandomSubarray(SIZES, 1, 6).sort((a,b) => SIZES.indexOf(a) - SIZES.indexOf(b));
    return {
        id: `var-${prodId}-${String.fromCharCode(97 + variantIndex)}`,
        color,
        pattern,
        availableSizes
    };
}

let generatedText = '';
for (let i = 4; i <= 23; i++) {
    const id = `prod-${String(i).padStart(3, '0')}`;
    const brand = BRANDS[Math.floor(Math.random() * BRANDS.length)];
    const basePrice = Math.floor(Math.random() * (65 - 25 + 1) + 25) + 0.99;
    const image = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    const type = 'T-Shirt';
    
    // Generate 2 to 4 variants
    const numVariants = Math.floor(Math.random() * 3) + 2;
    const variants = [];
    for(let v = 0; v < numVariants; v++) {
        variants.push(generateVariant(id.replace('prod-', ''), v));
    }
    
    const objStr = `  {
    id: '${id}',
    name: '${brand} Signature Tee ${i - 3}',
    brand: '${brand}',
    category: 'Relaxed',
    type: '${type}',
    basePrice: ${basePrice},
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['${image}'],
    variants: ${JSON.stringify(variants, null, 6).replace(/\"([^(\")"]+)\":/g, "$1:").replace(/\"/g, "'")}
  },\n`;
    generatedText += objStr;
}

const filepath = 'd:/UTKARSH/GitHub/Orignal/shopcart-core/data/products.ts';
let content = fs.readFileSync(filepath, 'utf8');
content = content.replace(/\];\s*$/, generatedText + '];\n');
fs.writeFileSync(filepath, content);
console.log('Successfully added 20 procedurally generated T-Shirts.');
