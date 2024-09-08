'use client'

import { ShoppingBag, Menu, X, Instagram, Twitter, Facebook, Star, ArrowRight, ChevronDown, Heart } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen)

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    )
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setPriceRange(prev => [prev[0], value])
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const colors = ['Black', 'White', 'Gray', 'Beige', 'Navy']

  const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const likedItems = [
    { id: 1, name: 'Slim Fit Cotton Twill Trousers', price: 1499.00, image: '/placeholder.svg?height=300&width=200' },
    { id: 2, name: 'Classic White T-Shirt', price: 599.00, image: '/placeholder.svg?height=300&width=200' },
    { id: 3, name: 'Leather Belt', price: 899.00, image: '/placeholder.svg?height=300&width=200' },
  ]

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Fashion Blogger",
      content: "MinimalWear's clothes are a dream come true for any minimalist. The quality is outstanding, and the designs are timeless.",
      rating: 5
    },
    {
      name: "Alex Chen",
      role: "Graphic Designer",
      content: "I've never felt more comfortable and stylish. These garments are perfect for both work and leisure.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      content: "The versatility of MinimalWear's collection is impressive. I can mix and match pieces effortlessly for any occasion.",
      rating: 4
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <motion.header 
        className="border-b border-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <motion.a 
                href="#" 
                className="text-2xl font-light tracking-wider text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MINIMALWEAR
              </motion.a>
            </div>
            <nav className="hidden md:flex space-x-10">
              {['Women', 'Men', 'Accessories', 'About'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <div className="hidden md:flex items-center">
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingBag className="h-6 w-6" />
              </motion.a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Women', 'Men', 'Accessories', 'About'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-base font-light text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        <motion.section 
          className="bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.h1 
              className="text-5xl font-light tracking-tight text-gray-900 sm:text-6xl md:text-7xl mb-6"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.span className="block" variants={fadeIn}>Effortless Style</motion.span>
              <motion.span className="block text-gray-500" variants={fadeIn}>For Every Day</motion.span>
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md text-xl text-gray-500 sm:text-2xl mb-10"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              Discover our collection of minimalist, high-quality garments designed for your everyday life.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.a
                href="#"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-light text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <motion.h2 
                className="text-3xl font-light tracking-tight text-gray-900"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                Featured Collection
              </motion.h2>
              <motion.button
                onClick={toggleFilter}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Filter
                <ChevronDown className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </motion.button>
            </div>
            
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 p-6 bg-gray-50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Size</h3>
                      <div className="flex flex-wrap gap-2">
                        {sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => handleSizeToggle(size)}
                            className={`px-3 py-1 border ${
                              selectedSizes.includes(size)
                                ? 'bg-gray-900 text-white'
                                : 'bg-white text-gray-900'
                            } transition-colors duration-300`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Color</h3>
                      <div className="flex flex-wrap gap-2">
                        {colors.map(color => (
                          <button
                            key={color}
                            onClick={() => handleColorToggle(color)}
                            className={`px-3 py-1 border ${
                              selectedColors.includes(color)
                                ? 'bg-gray-900 text-white'
                                : 'bg-white text-gray-900'
                            } transition-colors duration-300`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Price Range</h3>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full"
                      />
                      <p className="mt-2">$0 - ${priceRange[1]}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item} 
                  className="group"
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={`https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80`}
                      alt={`Product ${item}`}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-light text-gray-900 mb-1">Essential Tee</h3>
                  <p className="text-base text-gray-500">$49.99</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section 
          className="py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-light tracking-tight text-gray-900 mb-12"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              Your Liked Items
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {likedItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  className="group relative"
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-light text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-base text-gray-500">Rs. {item.price.toFixed(2)}</p>
                  <motion.button
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="py-24 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-light tracking-tight text-gray-900 mb-12 text-center"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              What Our Customers Say
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 shadow-sm"
                  variants={fadeIn}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <motion.p 
                    className="text-gray-600 mb-6 text-lg italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonial.content}"
                  </motion.p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img 
                        className="h-10 w-10 rounded-full object-cover"
                        src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80`}
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer 
        className="bg-white border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Company', items: ['About', 'Careers'] },
              { title: 'Support', items: ['Contact', 'Shipping'] },
              { title: 'Legal', items: ['Privacy', 'Terms'] },
              { title: 'Connect', items: ['Instagram', 'Twitter', 'Facebook'] }
            ].map((column, columnIndex) => (
              <div key={column.title}>
                <motion.h3 
                  className="text-sm font-medium text-gray-900 mb-4"
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: columnIndex * 0.1 }}
                >
                  {column.title}
                </motion.h3>
                <motion.ul 
                  className="space-y-4"
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  {column.items.map((item, itemIndex) => (
                    <motion.li 
                      key={item}
                      variants={fadeIn}
                      transition={{ delay: (columnIndex * 0.1) + (itemIndex * 0.1) }}
                    >
                      <motion.a 
                        href="#" 
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {column.title === 'Connect' && (
                          {
                            'Instagram': <Instagram className="h-5 w-5 mr-2" />,
                            'Twitter': <Twitter className="h-5 w-5 mr-2" />,
                            'Facebook': <Facebook className="h-5 w-5 mr-2" />
                          }[item]
                        )}
                        {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
          <motion.div 
            className="mt-12 border-t border-gray-100 pt-8"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <p className="text-sm text-gray-400 text-center">
              &copy; 2023 MinimalWear, Inc. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}