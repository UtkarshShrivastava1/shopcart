export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Variant {
  id: string;
  color: string;
  pattern: string;
  availableSizes: Size[];
  priceOverride?: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  type: string;
  gender: 'Men' | 'Women' | 'Unisex';
  basePrice: number;
  description: string;
  images: string[]; // URLs or paths
  variants: Variant[];
}

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Heavyweight Oversized Hoodie',
    brand: 'CoreLabel',
    category: 'Oversized',
    type: 'Heavyweight Solid',
    gender: 'Men',
    basePrice: 7055,
    description: 'Premium heavyweight cotton blend oversized hoodie. Built for comfort and structural drape. Features a drop shoulder and ribbed trims.',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
        id: 'var-001-a',
        color: 'Slate Grey',
        pattern: 'Solid',
        availableSizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 'var-001-b',
        color: 'Midnight Indigo',
        pattern: 'Solid',
        availableSizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        id: 'var-001-c',
        color: 'Vintage Wash',
        pattern: 'Acid Wash',
        availableSizes: ['S', 'M'], // Limited sizes to demonstrate UI locking
      }
    ]
  },
  {
    id: 'prod-002',
    name: 'Minimalist Relaxed Tee',
    brand: 'Essentials',
    category: 'Relaxed',
    type: 'Minimalist Stripe',
    gender: 'Women',
    basePrice: 3735,
    description: 'Everyday relaxed fit tee featuring subtle stripe detailing. Crafted from breathable, organic cotton.',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
        id: 'var-002-a',
        color: 'Off-White',
        pattern: 'Navy Stripe',
        availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
      },
      {
        id: 'var-002-b',
        color: 'Navy',
        pattern: 'White Stripe',
        availableSizes: ['S', 'M', 'L'], // Missing XL to show unavailable sizes
      }
    ]
  },
  {
    id: 'prod-003',
    name: 'Utility Cargo Pants',
    brand: 'CoreLabel',
    category: 'Relaxed',
    type: 'Cargo',
    gender: 'Unisex',
    basePrice: 9130,
    description: 'Durable utility cargo pants with multiple articulated pockets. Designed for both functionality and a modern streetwear aesthetic.',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
        id: 'var-003-a',
        color: 'Olive Green',
        pattern: 'Solid',
        availableSizes: ['M', 'L', 'XL'],
      },
      {
        id: 'var-003-b',
        color: 'Black',
        pattern: 'Solid',
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'], // Full size run
      },
      {
        id: 'var-003-c',
        color: 'Desert Sand',
        pattern: 'Camo',
        availableSizes: ['L', 'XL'], // Very limited sizes
      }
    ]
  },
  {
    id: 'prod-004',
    name: 'Null Void Signature Tee 1',
    brand: 'Null Void',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Men',
    basePrice: 3237,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-004-a',
            color: 'White',
            pattern: 'Distressed',
            availableSizes: [
                  'XXL'
            ]
      },
      {
            id: 'var-004-b',
            color: 'Olive',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'L',
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-005',
    name: 'Urban Thread Signature Tee 2',
    brand: 'Urban Thread',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Women',
    basePrice: 4980,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-005-a',
            color: 'Washed Blue',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XXL'
            ]
      },
      {
            id: 'var-005-b',
            color: 'Rust',
            pattern: 'Solid',
            availableSizes: [
                  'XS'
            ]
      },
      {
            id: 'var-005-c',
            color: 'Sand',
            pattern: 'Minimal Font',
            availableSizes: [
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-005-d',
            color: 'Rust',
            pattern: 'Striped',
            availableSizes: [
                  'S',
                  'M'
            ]
      }
]
  },
  {
    id: 'prod-006',
    name: 'Essentials Signature Tee 3',
    brand: 'Essentials',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Men',
    basePrice: 3237,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-006-a',
            color: 'Burgundy',
            pattern: 'Distressed',
            availableSizes: [
                  'L'
            ]
      },
      {
            id: 'var-006-b',
            color: 'Rust',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'S'
            ]
      },
      {
            id: 'var-006-c',
            color: 'Navy',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-006-d',
            color: 'Sand',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-007',
    name: 'Elevate Signature Tee 4',
    brand: 'Elevate',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Women',
    basePrice: 2822,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-007-a',
            color: 'Burgundy',
            pattern: 'Striped',
            availableSizes: [
                  'XS',
                  'S',
                  'M'
            ]
      },
      {
            id: 'var-007-b',
            color: 'Olive',
            pattern: 'Distressed',
            availableSizes: [
                  'S',
                  'M',
                  'L',
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-008',
    name: 'CoreLabel Signature Tee 5',
    brand: 'CoreLabel',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Unisex',
    basePrice: 4316,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-008-a',
            color: 'Navy',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'S'
            ]
      },
      {
            id: 'var-008-b',
            color: 'Heather Grey',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'XL'
            ]
      },
      {
            id: 'var-008-c',
            color: 'Navy',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'S',
                  'L',
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-009',
    name: 'Urban Thread Signature Tee 6',
    brand: 'Urban Thread',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Men',
    basePrice: 3652,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-009-a',
            color: 'Black',
            pattern: 'Distressed',
            availableSizes: [
                  'M'
            ]
      },
      {
            id: 'var-009-b',
            color: 'Sand',
            pattern: 'Striped',
            availableSizes: [
                  'S',
                  'M',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-009-c',
            color: 'Navy',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL'
            ]
      },
      {
            id: 'var-009-d',
            color: 'White',
            pattern: 'Striped',
            availableSizes: [
                  'XS',
                  'S'
            ]
      }
]
  },
  {
    id: 'prod-010',
    name: 'Essentials Signature Tee 7',
    brand: 'Essentials',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Women',
    basePrice: 4565,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-010-a',
            color: 'Charcoal',
            pattern: 'Distressed',
            availableSizes: [
                  'XS',
                  'S',
                  'XXL'
            ]
      },
      {
            id: 'var-010-b',
            color: 'Olive',
            pattern: 'Striped',
            availableSizes: [
                  'S',
                  'M'
            ]
      },
      {
            id: 'var-010-c',
            color: 'Washed Blue',
            pattern: 'Minimal Font',
            availableSizes: [
                  'S',
                  'M',
                  'L',
                  'XL'
            ]
      },
      {
            id: 'var-010-d',
            color: 'Olive',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L'
            ]
      }
]
  },
  {
    id: 'prod-011',
    name: 'Urban Thread Signature Tee 8',
    brand: 'Urban Thread',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Men',
    basePrice: 3569,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-011-a',
            color: 'White',
            pattern: 'Solid',
            availableSizes: [
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-011-b',
            color: 'Rust',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-011-c',
            color: 'Black',
            pattern: 'Striped',
            availableSizes: [
                  'XS',
                  'S',
                  'L',
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-012',
    name: 'Elevate Signature Tee 9',
    brand: 'Elevate',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Women',
    basePrice: 2656,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-012-a',
            color: 'Burgundy',
            pattern: 'Distressed',
            availableSizes: [
                  'L',
                  'XL'
            ]
      },
      {
            id: 'var-012-b',
            color: 'Charcoal',
            pattern: 'Solid',
            availableSizes: [
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-013',
    name: 'Null Void Signature Tee 10',
    brand: 'Null Void',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Unisex',
    basePrice: 3569,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-013-a',
            color: 'White',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-013-b',
            color: 'Burgundy',
            pattern: 'Solid',
            availableSizes: [
                  'XS'
            ]
      }
]
  },
  {
    id: 'prod-014',
    name: 'CoreLabel Signature Tee 11',
    brand: 'CoreLabel',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Men',
    basePrice: 4399,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-014-a',
            color: 'Rust',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-014-b',
            color: 'Navy',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-014-c',
            color: 'Charcoal',
            pattern: 'Distressed',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-014-d',
            color: 'Black',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S'
            ]
      }
]
  },
  {
    id: 'prod-015',
    name: 'Urban Thread Signature Tee 12',
    brand: 'Urban Thread',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Women',
    basePrice: 3652,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-015-a',
            color: 'Olive',
            pattern: 'Striped',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-015-b',
            color: 'Burgundy',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'S',
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-016',
    name: 'CoreLabel Signature Tee 13',
    brand: 'CoreLabel',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Men',
    basePrice: 3320,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-016-a',
            color: 'Washed Blue',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'XXL'
            ]
      },
      {
            id: 'var-016-b',
            color: 'Charcoal',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'L'
            ]
      }
]
  },
  {
    id: 'prod-017',
    name: 'Elevate Signature Tee 14',
    brand: 'Elevate',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Women',
    basePrice: 4316,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-017-a',
            color: 'White',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL'
            ]
      },
      {
            id: 'var-017-b',
            color: 'Sand',
            pattern: 'Distressed',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-017-c',
            color: 'Sand',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S',
                  'M'
            ]
      }
]
  },
  {
    id: 'prod-018',
    name: 'Urban Thread Signature Tee 15',
    brand: 'Urban Thread',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Unisex',
    basePrice: 2739,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-018-a',
            color: 'Washed Blue',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'L',
                  'XXL'
            ]
      },
      {
            id: 'var-018-b',
            color: 'Olive',
            pattern: 'Distressed',
            availableSizes: [
                  'XS'
            ]
      }
]
  },
  {
    id: 'prod-019',
    name: 'Elevate Signature Tee 16',
    brand: 'Elevate',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Men',
    basePrice: 5478,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-019-a',
            color: 'Charcoal',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-019-b',
            color: 'Burgundy',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-020',
    name: 'CoreLabel Signature Tee 17',
    brand: 'CoreLabel',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Women',
    basePrice: 3901,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-020-a',
            color: 'Sand',
            pattern: 'Distressed',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'XXL'
            ]
      },
      {
            id: 'var-020-b',
            color: 'Sand',
            pattern: 'Striped',
            availableSizes: [
                  'XS',
                  'XL'
            ]
      },
      {
            id: 'var-020-c',
            color: 'Burgundy',
            pattern: 'Minimal Font',
            availableSizes: [
                  'M',
                  'XL',
                  'XXL'
            ]
      }
]
  },
  {
    id: 'prod-021',
    name: 'Urban Thread Signature Tee 18',
    brand: 'Urban Thread',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Men',
    basePrice: 4565,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-021-a',
            color: 'White',
            pattern: 'Graphic Logo',
            availableSizes: [
                  'M'
            ]
      },
      {
            id: 'var-021-b',
            color: 'Navy',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL'
            ]
      },
      {
            id: 'var-021-c',
            color: 'White',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'S'
            ]
      }
]
  },
  {
    id: 'prod-022',
    name: 'CoreLabel Signature Tee 19',
    brand: 'CoreLabel',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Women',
    basePrice: 2656,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-022-a',
            color: 'Sand',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'XL'
            ]
      },
      {
            id: 'var-022-b',
            color: 'Olive',
            pattern: 'Minimal Font',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL'
            ]
      },
      {
            id: 'var-022-c',
            color: 'Heather Grey',
            pattern: 'Solid',
            availableSizes: [
                  'XS'
            ]
      }
]
  },
  {
    id: 'prod-023',
    name: 'Essentials Signature Tee 20',
    brand: 'Essentials',
    category: 'Relaxed',
    type: 'T-Shirt',
    gender: 'Unisex',
    basePrice: 3984,
    description: 'High-quality cotton blend everyday t-shirt. Generated to demonstrate catalog scale and variant matrix complexity.',
    images: ['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'],
    variants: [
      {
            id: 'var-023-a',
            color: 'Olive',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'XXL'
            ]
      },
      {
            id: 'var-023-b',
            color: 'Olive',
            pattern: 'Solid',
            availableSizes: [
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      },
      {
            id: 'var-023-c',
            color: 'Navy',
            pattern: 'Solid',
            availableSizes: [
                  'XS',
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL'
            ]
      }
]
  },
];
