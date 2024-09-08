import React from "react";
import '../styles/components/BlogPage.css';

const posts = [
  {
    id: 1,
    title: 'Maximize Your Conversion Rates with These Proven Strategies',
    href: '#',
    description:
      'Discover actionable strategies to enhance your website’s conversion rates. Learn how to leverage data-driven techniques to turn visitors into loyal customers. Our expert tips will help you optimize every step of the conversion funnel.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Ayush Thakur',
      role: 'Co-Founder',
      href: '#',
      imageUrl:
        'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Gathering and Utilizing Customer Feedback',
    href: '#',
    description:
      'Learn how to effectively gather and use customer feedback to improve your products and services. This guide covers various feedback collection methods, analysis techniques, and how to implement changes that resonate with your audience.',
    date: 'June 16, 2024',
    datetime: '2024-06-16',
    category: { title: 'Customer Experience', href: '#' },
    author: {
      name: 'Raghav Sharma',
      role: 'Client Relations Manager',
      href: '#',
      imageUrl:
        'https://randomuser.me/api/portraits/men/45.jpg',
    },
  },
  {
    id: 3,
    title: 'Top 10 Services Every Modern Business Needs',
    href: '#',
    description:
      'Explore the essential services that can transform your business operations. From digital marketing to customer support, find out which services will give you a competitive edge and drive growth in today’s market.',
    date: 'May 16, 2024',
    datetime: '2024-05-16',
    category: { title: 'Business Services', href: '#' },
    author: {
      name: 'Japleen Kaur',
      role: 'Business Consultant',
      href: '#',
      imageUrl:
        'https://randomuser.me/api/portraits/women/22.jpg',
    },
  }
];

const BlogPage = (props) => {

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {<div className="title">{props.title}</div>}
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
