'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const [persone, setPersone] = useState(1);
	const [farina, setFarina] = useState(165);
	const [acqua, setAcqua] = useState(250);
	const [sale, setSale] = useState(4.5);
	const [lievito, setLievito] = useState(2.3);
	const [ricetta, setRicetta] = useState('hidden');
	const [ricettaArrow, setRicettaArrow] = useState('rotate-180');

	const handleChange = (e) => {
		let sP = e.target.value;
		setFarina(165 * sP);
		setAcqua(250 * sP);
		setSale(parseFloat(4.5 * sP).toFixed(2));
		setLievito(parseFloat(2.3 * sP).toFixed(2));
	};

	const handleRicetta = () => {
		setRicetta(ricetta == 'hidden' ? 'block' : 'hidden');
		setRicettaArrow(ricettaArrow == 'rotate-180' ? 'rotate-0' : 'rotate-180');
	};

	return (
		<div>
			<main className="max-w-md mx-4 md:mx-auto my-12">
				<div className="flex gap-4 justify-center items-center">
					<Image
						src="/icon.svg"
						alt="logo"
						width="0"
						height="0"
						sizes="100vw"
						title="Dosi per Pizza in Casa - Pizza Maker"
						className="w-36 h-36"
					/>
					<div>
						<h1 className="uppercase text-sm opacity-60">
							Dosi per pizza in casa
						</h1>
						<h2 className="text-6xl font-extrabold leading-[3.5rem]">
							PIZZA MAKER
						</h2>
					</div>
				</div>
				<div className="my-8">
					<p>
						Non sono un pizzaiolo ma amo la pizza alla follia. Dal 2020 mi
						diletto in casa con un canonico forno da cucina e ho deciso di
						creare questo piccolo tool per aiutarmi nel peso degli
						ingredienti.
					</p>
				</div>
				<div className="my-4">
					<label htmlFor="persone">Per quante persone?</label>
					<select name="persone" onChange={handleChange} defaultValue={1}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
				</div>
				<div className="my-4 grid grid-cols-2 gap-2">
					{/* Acqua */}
					<div className="relative">
						<label htmlFor="acqua">Acqua</label>
						<input
							type="text"
							name="acqua"
							id="acqua"
							defaultValue={acqua}
						/>
						<span className="absolute top-1/2 right-4 z-10 opacity-50">
							ml.
						</span>
					</div>

					{/* Farina */}
					<div className="relative">
						<label htmlFor="farina">Farina</label>
						<input
							type="text"
							name="farina"
							id="farina"
							defaultValue={farina}
						/>
						<span className="absolute top-1/2 right-4 z-10 opacity-50">
							gr.
						</span>
					</div>
				</div>

				<div className="my-4 grid grid-cols-2 gap-2">
					{/* Sale */}
					<div className="relative">
						<label htmlFor="sale">Sale</label>
						<input
							type="text"
							name="sale"
							id="sale"
							defaultValue={sale}
						/>
						<span className="absolute top-1/2 right-4 z-10 opacity-50">
							gr.
						</span>
					</div>

					{/* Acqua */}
					<div className="relative">
						<label htmlFor="lievito">Lievito Secco</label>
						<input
							type="text"
							name="lievito"
							id="lievito"
							defaultValue={lievito}
						/>
						<span className="absolute top-1/2 right-4 z-10 opacity-50">
							gr.
						</span>
					</div>
				</div>
				<span className="h-[1px] bg-gray-300 block w-full my-8"></span>
				<div>
					<div className="text-xl mb-2 flex items-center justify-between uppercase">
						<h2>Come realizzo la mia Pizza?</h2>
						<span
							className={
								'opacity-50 transition-all duration-150 ease-in-out ' +
								ricettaArrow
							}
							onClick={handleRicetta}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="m5 15l7-7l7 7"
								></path>
							</svg>
						</span>
					</div>
					<div className={'entry-content ' + ricetta}>
						<p>
							Utilizzo le mie <strong>dosi per pizza in casa</strong>{' '}
							partendo dall&apos;acqua. La verso in una ciotola capiente
							e aggiungo il lievito secco e faccio sciogliere il lievito.
							Una vota sciolto lo lievito aggiungo poco alla volta la
							farina girandola un cucchiaio o una forchetta affinchè non
							si creino grumi. Quando la farina unita all&apos;acqua
							assomiglia ad una pastella verso tutto il sale e continuo a
							mescolare ed aggiungere farina. Una volta unita tutta la
							farina, che dovrebbe essersi completamente assorbita,
							dovresti avere una pallina che ungo con un filo di olio.
							Copro il contenitore affinchè non passi l&apos;aria e
							lascio lievitare per almeno un paio d&apos;ore.
						</p>
						<p>
							Passate due ore riprendo l&apos;impasto che dovrebbe essere
							più manleabile. Lo stendo sul piano di lavoro cercando di
							tirarlo da tutte le estremità, cercando di creare un velo
							il più sottile possibile. Questa operazione mi serve
							rafforzare l&apos;impasto. Una volta stesto completamente,
							prendo le estremità e cerco di appallattolarle cercando di
							sigillare bene la pallina realizzata.
						</p>
						<p>
							A questo punto mi assicuro che il contenitore possa
							permettere la lievitazione dell&apos;impasto, che
							raddoppierà nell&apos;arco di qualche ora. Un paio
							d&apos;ore prima di stendere la pizza creo le porzioni per
							persona che saranno di 250/270 grammi ognuna.
						</p>
					</div>
				</div>
				<span className="h-[1px] bg-gray-300 block w-full my-8"></span>

				<div className="mt-12 text-sm text-center">
					<span className="opacity-50">Made with</span> ❤️{' '}
					<span className="opacity-50">and</span> 🍺{' '}
					<span className="opacity-50">by </span>
					<Link href="https://www.a2area.it" className="opacity-85">
						Alessandro Alessio
					</Link>
				</div>
			</main>
		</div>
	);
}
