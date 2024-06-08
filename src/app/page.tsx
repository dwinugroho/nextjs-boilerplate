import { Snippet } from '@/components'

export default function Home() {
  return (
    <div className='container pb-24'>
      <div className='mt-6'>
        <h1 className='text-3xl font-bold'>Installation</h1>
        <div className='[&>h3]:step ml-4 border-l pl-8'>
          <h3 className='mb-4 mt-8 font-bold'>Clone the Repository</h3>
          <p className='text-foreground/80'>
            The first step is to clone the repository to your computer.
          </p>
          <Snippet>
            git clone
            https://github.com/dwinugroho/nextjs-typescript-tailwind.git
          </Snippet>
          <h3 className='mb-4 mt-8 font-bold'>
            Navigate to the Project Directory
          </h3>
          <p className='text-foreground/80'>
            Move into the project directory where the cloned repository is
            located.
          </p>
          <Snippet>cd nextjs-typescript-tailwind</Snippet>
          <h3 className='mb-4 mt-8 font-bold'>Install Dependencies</h3>
          <p className='text-foreground/80'>
            Install all required dependencies for the project.
          </p>
          <Snippet>yarn install</Snippet>
          <h3 className='mb-4 mt-8 font-bold'>Run the Development Server</h3>
          <p className='text-foreground/80'>
            Start the development server to begin your project.
          </p>
          <Snippet>yarn dev</Snippet>
        </div>
      </div>
      <div className='mt-12'>
        <h1 className='text-3xl font-bold'>Features</h1>
        <ul className='ml-6 mt-4 list-disc'>
          <li className='mb-3'>
            <b>NextJS 14</b>: Harness the power of the latest Next.js version,
            bringing you enhanced performance and exciting new features.
          </li>
          <li className='mb-3'>
            <b>AppRoute Structure</b>: Leverage the intuitive AppRoute pattern
            for organized and scalable routing in your Next.js applications.
          </li>
          <li className='mb-3'>
            <b>Tailwind CSS</b>: Stay on the cutting edge of styling with
            Tailwind CSS version 3, providing a utility-first approach for
            building modern designs.
          </li>
          <li className='mb-3'>
            <b>Shadcn</b>: Enhance your project with the sleek and modern shadcn
            component library.
          </li>
          <li className='mb-3'>
            <b>TypeScript</b>: Enjoy the benefits of static typing and improved
            developer experience with TypeScript.
          </li>
          <li className='mb-3'>
            <b>ESLint</b>: Keep your codebase clean and consistent with ESLint,
            ensuring high-quality code standards.
          </li>
          <li className='mb-3'>
            <b>Prettier</b>: Maintain code readability and aesthetics
            effortlessly with Prettier.
          </li>
          <li className='mb-3'>
            <b>Lint-Staged</b>: Optimize your workflow by running ESLint on
            pre-committed files with lint-staged.
          </li>
          <li className='mb-3'>
            <b>Webpack/SVGR</b>: Easily handle SVGs in your project with Webpack
            and SVGR integration.
          </li>
          <li className='mb-3'>
            <b>Jest Testing Library React</b>: Write robust tests for your React
            components using the Jest testing library.
          </li>
          <li className='mb-3'>
            <b>Husky</b>: Enforce quality checks and prevent bad commits with
            Husky, your Git hooks guardian.
          </li>
          <li className='mb-3'>
            <b>Commitizen</b>: Make your commits more meaningful and
            standardized with Commitizen.
          </li>
        </ul>
      </div>
    </div>
  )
}
