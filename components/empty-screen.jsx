
import { useUser } from '@clerk/nextjs'

export const EmptyScreen = () => {
  const kk = useUser()
  return (
    <div className="mx-auto max-w-2xl px-4 empty">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold flex items-center gap-2">
         Hi {kk.user?.firstName}
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
        Welcome to Dr. Lainie!
          .
        </p>
        <p className="leading-normal text-muted-foreground">
        How are you today? What’s on your mind today?
        </p>
        
      </div>
      <div className='flex items-center justify-center'>
          <img src="/chatbro.svg" alt="conversation.png" className='w-full lg:w-2/3' />
        </div>
    </div>
  )
}

