export default function Footer(props: {className?: string}) {

    return (

      <footer className={`${props.className}`}>
        <div className="container">
          <div className="flex justify-between gap-1 text-sm my-10 py-3">
            <p className=""> Todos os direitos reservados a <a href="" className="text-hover hover:bg-main font-bold transition-all duration-300 cursor-pointer">Cadeirada Estúdio®</a></p>
            <p className="opacity-40">Desenvolvido por lapollivinicius | <a className="text-hover font-semibold" href="">GITHUB ↗</a></p>
          </div>
        </div>
        
      </footer>

    )

}