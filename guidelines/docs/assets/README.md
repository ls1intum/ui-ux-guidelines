# How to include images in the docs

Note: There is a difference between the imports in `.mdx` files and raw `.md` files, as `.mdx` files support React components. 

## .mdx files
### PNG
1. Import the `.tsx` component to render the image
   ```
   import Image from "../src/components/image/image";
   ```
2. Import the image
   ```
   import SeoMetaHeaderExample from './assets/seo-meta-header-example.png';
   ```
3. Use the imported image in the `Image` component
   ```
    <Image src={SeoMetaHeaderExample} alt={"Example of a good heading structure shown in the SEO META in 1 CLICK tool"} />
    ```
   
### SVGs
1. Import the SVG as ReactComponent
   ```
   import RedirectIcon from './assets/arrow-up-right-from-square-solid-full.svg';
   ```
2. Use the imported SVG as a component
   ```
   <RedirectIcon style={{width: "20px", height: "20px"}} alt={"Redirect Icon"} aria-label={"Redirect Icon"} />
   ```


## raw .md files
