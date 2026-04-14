import React from 'react'

const ProductItem = ({ product }) => {
	return (
		<a href="#!">
			<div className="flex flex-col items-center justify-center">
				<div className="w-44 h-44 flex justify-center items-center">
					<img
						src={product.img}
						className="rounded-full max-w-full max-h-full w-auto"
						alt="..."
					/>
				</div>
				<div className="p-4 md:p-6">
					<h2 className="text-lg font-bold leading-none my-2">
						{product.title}
					</h2>
				</div>
			</div>
		</a>
	);
};


export default ProductItem;