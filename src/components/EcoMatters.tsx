import React from 'react';

const WhyEcoMattersPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white text-gray-900">
            <div className="container space-y-10">
                <h1 className="text-5xl font-bold text-center">Why Eco-Friendly Fashion Matters</h1>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold">The Impact of Fast Fashion</h2>
                        <p>Fast fashion contributes to the high levels of waste, pollution, and unethical labor practices. By choosing eco-friendly fashion, we can help to mitigate these issues.</p>
                    </div>
                    <img src="/fast.jpeg" alt="Fast fashion" className="rounded shadow-lg"/>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <img src="/eco.jpeg" alt="Eco-friendly fashion" className="rounded shadow-lg"/>
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold">The Promise of Eco-Friendly Fashion</h2>
                        <p>Eco-friendly fashion promises a sustainable and ethical alternative to fast fashion. It emphasizes recycling, quality over quantity, fair trade, and reducing carbon emissions.</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold">Your Role in the Change</h2>
                        <p>By choosing eco-friendly fashion, you are part of the solution. Every eco-friendly item you buy, sends a message to the industry that consumers care about sustainability.</p>
                    </div>
                    <img src="/consumer.jpeg" alt="Consumer power" className="rounded shadow-lg"/>
                </div>
            </div>
        </div>
    );
}

export default WhyEcoMattersPage;
