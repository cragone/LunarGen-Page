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
                            <img src="https://fatstacksblog.com/wp-content/uploads/2020/10/business-docs-oct21.jpg" alt="Documents" className="h-64 max-w"/>
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">Document Management</h2>
                            <p>Document Management made simple.</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-primary" href="/ContactPage">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    {/* second card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.wisegeek.com/slideshow-mobile-small/female-doctor-in-lab-coat-looking-through-black-microscope.jpg" alt="Assets" className="h-64 max-w" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Asset Management</h2>
                            <p>GMP Compliant Asset systems, with faster systems then ever.</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-primary" href="/ContactPage">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    {/* third card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://www.a3p.org/wp-content/uploads/2022/07/Aseptic_manufacturing-processes_la_vague_74_a3p.png" alt="Shoes" className="h-64 max-w" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Sample Management Systems</h2>
                            <p>Upgrade or implement faster, safer, compliant sample management.</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-primary" href="/ContactPage">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* first second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://thienanblog.com/wp-content/uploads/2015/06/Validated1.jpg" alt="Shoes" className="h-64 m-w"/></figure>
                        <div class="card-body">
                            <h2 class="card-title">Validation</h2>
                            <p>We assist with the long and tedious process of validation.</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-primary" href="/ContactPage">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    {/* second second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://ecommercialplastics.com/wp-content/uploads/2016/09/871x430-LEAN-news.jpg" alt="Shoes" className="h-64 max-w"/></figure>
                        <div class="card-body">
                            <h2 class="card-title">Work Allocation</h2>
                            <p>Track workflows, track worked hours, track assignments. We can Do it all!</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-primary" href="/ContactPage">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    {/* third second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://ensearch.com/wp-content/uploads/2014/04/interview_handshake.jpeg" alt="Shoes" className="h-64 max-w"/></figure>
                        <div class="card-body">
                            <h2 class="card-title">System Solutions</h2>
                            <p>We help develop onsite system solutions, and custom software for you!</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-primary" href="/ContactPage">Buy Now</a>
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
