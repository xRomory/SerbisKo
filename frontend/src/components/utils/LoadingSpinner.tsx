export default function LoadingSpinner() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid mb-4"></div>
      </div>
    </>
  )
}
