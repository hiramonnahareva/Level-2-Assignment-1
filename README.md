# What are some differences between interfaces and types in TypeScript?

---

## 1. উদ্দেশ্য / সংজ্ঞা

- **Interface:** একটি কন্ট্র্যাক্ট বা নিয়ম যা নির্ধারণ করে object বা class-এর structure কেমন হবে—কোন property, কোন type, কোন method থাকবে।  
- **Type:** একটি নাম দিয়ে কোনো ডেটার ধরন (object, primitive, union, tuple) সংজ্ঞায়িত করার উপায়, যা পুনরায় ব্যবহারযোগ্য।   

## 2. ফ্লেক্সিবিলিটি 
- **Type:** খুব flexible, বিভিন্ন ধরনের typing করা যায়।  
- **Interface:** সীমিত, মূলত object বা class-এর structure define করে।  

## 3. ক্লাস ইমপ্লিমেন্টেশন
- **Type:** class implement করা যায়, তবে কম ব্যবহার হয়।  
- **Interface:** class implement এবং extend করার জন্য ideal।  

## 4. ইউনিয়ন / ইন্টারসেকশন
- **Type:** union এবং intersection type তৈরি করা যায়।  
- **Interface:** union type support করে না, কিন্তু extends দিয়ে structure বাড়ানো যায়।   


# What is the use of enums in TypeScript? Provide an example of a numeric and string enum. 

ypeScript-এর Enums হলো একটি বিশেষ ফিচার, যা JavaScript-এর type-level extension নয়।
এনাম ব্যবহার করে ডেভেলপাররা নামকৃত ধ্রুবকের একটি সেট তৈরি করতে পারে, যা কোডের উদ্দেশ্য স্পষ্ট করে এবং স্বতন্ত্র কেসগুলো আলাদা রাখে।
TypeScript এ এনাম দুই ধরনের: numeric এবং string।

Numeric enums সাধারণত status codes বা indexes এর জন্য ব্যবহার হয় । 
## Numeric Enum উদাহরণ:

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202
} 

String enums সাধারণত labels বা directions বোঝাতে ব্যবহার হয়। 
## String Enum উদাহরণ:



enum CardinalDirections {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West'
}




  