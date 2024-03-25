import React from 'react';

const HomeComponent = () => {

    return (
        <div className="container mx-auto h-full">
            <header>
                <h1 className="text-3xl font-bold text-center my-8">Welcome to Lunar Gen</h1>
                <p className="text-center mb-8">We work with you to bring business changing software.</p>
            </header>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* first card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src="https://fatstacksblog.com/wp-content/uploads/2020/10/business-docs-oct21.jpg" alt="Documents" />
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">Document Management</h2>
                            <p>Document Management made simple.</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* second card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* third card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Our Team Assists with:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* first second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://thienanblog.com/wp-content/uploads/2015/06/Validated1.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Validation</h2>
                            <p>We assist with the long and tedious process of validation.</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* second second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* third second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p>Contact information and contact form can go here.</p>
            </section>
        </div>
    );
};

export default HomeComponent;
