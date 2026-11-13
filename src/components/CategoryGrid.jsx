import React from 'react';
import CategoryCard from './CategoryCard';
import { CATEGORIES } from '../data/catalogData';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 animate-fade-in">
      
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
          Категории продукции
        </h2>
      </div>

      {/* 5 Categories Horizontally on Desktop, Responsive on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
        {CATEGORIES.map((category, index) => (
          <CategoryCard
            key={category.slug}
            category={category}
            index={index}
            onClick={() => onSelectCategory(category.slug)}
          />
        ))}
      </div>

    </div>
  );
}
