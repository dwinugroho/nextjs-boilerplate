import { CopyButton } from '@/components'
import { cn } from '@/lib/utils'

export const Snippet = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => (
  <div className='relative'>
    <pre
      className={cn(
        'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 pl-4 pr-6 text-white dark:bg-zinc-900',
        className
      )}
      {...props}
    />
    <CopyButton
      value={props.children?.toString() || ''}
      className='absolute right-4 top-4'
    />
  </div>
)
