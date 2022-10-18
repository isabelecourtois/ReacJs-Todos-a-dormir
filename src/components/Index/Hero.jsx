import React from 'react';
import { Link } from 'react-router-dom';
import tadhero from "../../images/tadhero1.jpg"

const Hero = () => {

	return (
		<div>
			<div className="container">
				<div className="row py-5">
					<div className="col-lg-1 d-none d-lg-flex align-items-center">
						<div className="lc-block d-flex" style={{ writingMode: 'vertical-lr', transform: "rotate(180deg)" }}>
							<Link className="btn btn-link my-2 text-decoration-none" style={{color:'#80CECC'}} to={"/"} role="button">Facebook</Link>
							<Link className="btn btn-link my-4 text-decoration-none" style={{color:'#80CECC'}} to={"/"} role="button">Twitter</Link>
							<Link className="btn btn-link my-2 text-decoration-none" style={{color:'#80CECC'}} to={"/"} role="button">Youtube</Link>
						</div>
					</div>
					<div className="col-sm-6 d-flex d-lg-none flex-sm-column align-items-center justify-content-around mb-4 mb-sm-0">
						<div className="lc-block">
							<Link className="btn btn-link text-decoration-none" style={{color:'#80CECC'}} to={"/"} role="button">Facebook</Link>

						</div>
						<div className="lc-block">
							<Link className="btn btn-link text-decoration-none" style={{color:'#80CECC'}} to={"/"} role="button">Twitter</Link>

						</div>
						<div className="lc-block">
							<Link className="btn btn-link text-decoration-none" style={{color:'#80CECC'}} to={"/" }role="button">Youtube</Link>

						</div>
					</div>
					<div className="col-lg-4 col-sm-6">
						<div className="lc-block ratio ratio-1x1">
							<img style={{ objectFit: "cover" }} className="img-fluid" src={tadhero} alt="hero" />
						</div>
					</div>
					<div className="col-lg-4 offset-lg-1">
						<div className="lc-block my-5">
							<div editable="rich">
								<h1 className="rfs-25" style={{ color: '#80CECC' }}>Dormir bien...¡Sueño llama sueño!</h1>
							</div>
						</div>
						<div className="lc-block my-5">
							<div editable="rich">
								<p>Comenzar este maravilloso camino con todo lo que necesitas saber sobre el sueño de tu bebé.</p>
							</div>
						</div>
						<div className="lc-block ">
							<Link className="btn btn-lg mx-1" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} to={"/categoria/curso"} role="button">Cursos</Link>
							<Link className="btn btn-lg mx-1" style={{fontWeight:'bold', color: 'grey', backgroundColor:'#E2E2E2'}} to={"/categoria/consulta"} role="button">Consultas</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero;