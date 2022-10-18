import React from 'react'

const IndexContent = () => {
  return (
    <div>

<div className="container-fluid p-0 overflow-hidden my-5">
	<div className="row g-0 mx-5">
		<div className="col-lg-4 order-lg-2 " style={{ minHeight: '45vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(../../images/tad2.jpeg)'}}>

		</div>
		<div className="col-lg-8 order-lg-1 my-auto px-5 py-5">
			<div className="lc-block">
				<div editable="rich">
					<h2 style={{color:'#80CECC', textAlign:'center'}}>¡Hola soy Caro!</h2>
					<p className="lead">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type. Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum.</p>
				</div>
			</div>
		</div>
	</div>

	<div className="row g-0 mx-5">
		<div lc-helper="background" className="col-lg-4" style={{minHeight: '45vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(../../images/tad5.jpeg)'}}>
		</div>
		<div className="col-lg-8 my-auto px-5 py-5">
			<div className="lc-block">
				<div editable="rich">
                <h2 style={{color:'#80CECC', textAlign:'center'}}>¿Cómo puedes ayudar a tu bebé a dormir?</h2>
					<p className="lead">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type. Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum.</p>
				</div>
			</div>

		</div>
	</div>
</div>

    </div>
  )
}

export default IndexContent