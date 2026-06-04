export const shopConfig = {
  storeName: process.env.NEXT_PUBLIC_STORE_NAME || 'ShopCart Core',
  description: process.env.NEXT_PUBLIC_STORE_DESC || 'Independent Product Demo Version',
  currency: 'INR',
  theme: {
    primaryColor: 'indigo',
    secondaryColor: 'slate',
  },
  contact: {
    email: 'hello@shopcart.demo',
    phone: '+1 (555) 123-4567',
  }
};
