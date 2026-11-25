// All images placed here
const files = import.meta.glob("./*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
});

export const getImage = (name) => files[`./${name}`] || null;