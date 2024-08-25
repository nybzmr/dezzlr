export const navigation = {
  categories: [
    {
      id: 'groceries',
      name: 'Groceries',
      featured: [
        {
          name: 'Fresh Fruits',
          href: '/',
          imageSrc: 'https://example.com/images/fruits.jpg',
          imageAlt: 'Freshly picked fruits including apples, bananas, and oranges.',
        },
        {
          name: 'Organic Vegetables',
          href: '/',
          imageSrc: 'https://example.com/images/vegetables.jpg',
          imageAlt: 'A variety of organic vegetables such as carrots, spinach, and bell peppers.',
        },
      ],
      sections: [
        {
          id: 'fruits',
          name: 'Fruits',
          items: [
            { name: 'Apples', id: 'apples', href: '/groceries/fruits/apples' },
            { name: 'Bananas', id: 'bananas', href: '/groceries/fruits/bananas' },
            { name: 'Oranges', id: 'oranges', href: '/groceries/fruits/oranges' },
            { name: 'Berries', id: 'berries', href: '/groceries/fruits/berries' },
          ],
        },
        {
          id: 'vegetables',
          name: 'Vegetables',
          items: [
            { name: 'Carrots', id: 'carrots', href: '/groceries/vegetables/carrots' },
            { name: 'Spinach', id: 'spinach', href: '/groceries/vegetables/spinach' },
            { name: 'Broccoli', id: 'broccoli', href: '/groceries/vegetables/broccoli' },
            { name: 'Potatoes', id: 'potatoes', href: '/groceries/vegetables/potatoes' },
          ],
        },
      ],
    },
    {
      id: 'home-essentials',
      name: 'Home Essentials',
      featured: [
        {
          name: 'Cleaning Supplies',
          href: '/',
          imageSrc: 'https://example.com/images/cleaning_supplies.jpg',
          imageAlt: 'Various cleaning products like detergents and disinfectants.',
        },
        {
          name: 'Kitchen Tools',
          href: '/',
          imageSrc: 'https://example.com/images/kitchen_tools.jpg',
          imageAlt: 'A variety of kitchen tools including knives, spatulas, and measuring cups.',
        },
      ],
      sections: [
        {
          id: 'cleaning',
          name: 'Cleaning Supplies',
          items: [
            { name: 'Detergents', id: 'detergents', href: '/home-essentials/cleaning/detergents' },
            { name: 'Disinfectants', id: 'disinfectants', href: '/home-essentials/cleaning/disinfectants' },
            { name: 'Sponges', id: 'sponges', href: '/home-essentials/cleaning/sponges' },
            { name: 'Brooms & Mops', id: 'brooms_mops', href: '/home-essentials/cleaning/brooms-mops' },
          ],
        },
        {
          id: 'kitchen-tools',
          name: 'Kitchen Tools',
          items: [
            { name: 'Knives', id: 'knives', href: '/home-essentials/kitchen-tools/knives' },
            { name: 'Cutting Boards', id: 'cutting_boards', href: '/home-essentials/kitchen-tools/cutting-boards' },
            { name: 'Spatulas', id: 'spatulas', href: '/home-essentials/kitchen-tools/spatulas' },
            { name: 'Measuring Cups', id: 'measuring_cups', href: '/home-essentials/kitchen-tools/measuring-cups' },
          ],
        },
      ],
    },
    {
      id: 'personal-care',
      name: 'Personal Care',
      featured: [
        {
          name: 'Skincare Products',
          href: '/',
          imageSrc: 'https://example.com/images/skincare.jpg',
          imageAlt: 'Various skincare products like moisturizers and face washes.',
        },
        {
          name: 'Hair Care',
          href: '/',
          imageSrc: 'https://example.com/images/haircare.jpg',
          imageAlt: 'Shampoo and conditioner bottles arranged on a wooden shelf.',
        },
      ],
      sections: [
        {
          id: 'skincare',
          name: 'Skincare',
          items: [
            { name: 'Moisturizers', id: 'moisturizers', href: '/personal-care/skincare/moisturizers' },
            { name: 'Face Washes', id: 'face_washes', href: '/personal-care/skincare/face-washes' },
            { name: 'Sunscreen', id: 'sunscreen', href: '/personal-care/skincare/sunscreen' },
            { name: 'Body Lotion', id: 'body_lotion', href: '/personal-care/skincare/body-lotion' },
          ],
        },
        {
          id: 'haircare',
          name: 'Hair Care',
          items: [
            { name: 'Shampoo', id: 'shampoo', href: '/personal-care/haircare/shampoo' },
            { name: 'Conditioner', id: 'conditioner', href: '/personal-care/haircare/conditioner' },
            { name: 'Hair Oil', id: 'hair_oil', href: '/personal-care/haircare/hair-oil' },
            { name: 'Serums', id: 'serums', href: '/personal-care/haircare/serums' },
          ],
        },
      ],
    },
    {
      id: 'electronics',
      name: 'Electronics',
      featured: [
        {
          name: 'Home Appliances',
          href: '/',
          imageSrc: 'https://example.com/images/appliances.jpg',
          imageAlt: 'Small home appliances such as toasters, mixers, and kettles.',
        },
        {
          name: 'Smartphones',
          href: '/',
          imageSrc: 'https://example.com/images/smartphones.jpg',
          imageAlt: 'Latest smartphones displayed on a wooden table.',
        },
      ],
      sections: [
        {
          id: 'appliances',
          name: 'Home Appliances',
          items: [
            { name: 'Toasters', id: 'toasters', href: '/electronics/appliances/toasters' },
            { name: 'Mixers', id: 'mixers', href: '/electronics/appliances/mixers' },
            { name: 'Microwaves', id: 'microwaves', href: '/electronics/appliances/microwaves' },
            { name: 'Kettles', id: 'kettles', href: '/electronics/appliances/kettles' },
          ],
        },
        {
          id: 'smartphones',
          name: 'Smartphones',
          items: [
            { name: 'iPhone', id: 'iphone', href: '/electronics/smartphones/iphone' },
            { name: 'Samsung', id: 'samsung', href: '/electronics/smartphones/samsung' },
            { name: 'OnePlus', id: 'oneplus', href: '/electronics/smartphones/oneplus' },
            { name: 'Realme', id: 'realme', href: '/electronics/smartphones/realme' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About Us', id: '/' },
    { name: 'Contact', id: '/' },
  ],
};
