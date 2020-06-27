export default function ({store, redirect}) {
  if (!store.getters.hasReg){
    redirect('/register?message=register')
  }
}
