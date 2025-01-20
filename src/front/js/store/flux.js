const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			tablesOrders: {
				"Mesa 01": [], // Lista de pedidos para Mesa 01
				"Mesa 02": [], // agregar más mesas si es necesario
			},


			tables: [],

			menuData: {


				Bebidas: [
					{
						idProduct: "001", name: "Agua", description: "1L", price: "2,50€",
						image: "https://financialfood.es/wp-content/uploads/2024/04/Solan-de-Cabras_Campana-220424.jpg", quantity: 1
					},
					{
						idProduct: "002", name: "Cerveza", description: "33Cl", price: "3,00€",
						image: "https://yt3.googleusercontent.com/8fMR1gkzE7hf2sugNVo8Kjiykh8IoUZ1ICQ_-T0tZ6OZt9s13l1aLiTVTmJy4oQtumcmORD1=s900-c-k-c0x00ffffff-no-rj", quantity: 1
					},
					{
						idProduct: "003", name: "Fanta", description: "33Cl", price: "2,50€",
						image: "https://www.greekorico.com/wp-content/uploads/sites/652/2022/10/fanta-limon.png", quantity: 1
					},
					{
						idProduct: "004", name: "Acuarius", description: "33Cl", price: "2,50€",
						image: "https://www.lasansi.com/media/items/big/3c2c7-logomarcas-aquarius-naranja.jpg", quantity: 1
					},
					{
						idProduct: "017", name: "Cerveza 0,0", description: "33Cl", price: "3,00€",
						image: "https://yt3.googleusercontent.com/X9psilJdOXeD2-TrXTCBeFKN3In4v-ltfPypUYQst7wZAxM1f7EmQKjmaQLyNe8lRLaFvqlE=s900-c-k-c0x00ffffff-no-rj", quantity: 1
					},
					{
						idProduct: "018", name: "Coca-cola", description: "33Cl", price: "2,80€",
						image: "https://www.cocacolaep.com/assets/legacy-assets/Uploads/resources/Coca-Cola-1210.jpg", quantity: 1
					},
				],
				Entrantes: [
					{
						idProduct: "005", name: "Bruschetta", description: "Pan asado frotado con ajo y cubierto con AOVE . 2uds", price: "6,50€",
						image: "https://mandolina.co/wp-content/uploads/2024/08/Bruschetta_de_tomates_cherry_y_mozzarella-1200x675.jpg", quantity: 1
					},
					{
						idProduct: "006", name: "Buñuelos de bacalao", description: "5 uds", price: "9,50€",
						image: "https://cdn7.recetasdeescandalo.com/wp-content/uploads/2018/03/Bunuelos-de-bacalao-esponjosos-y-crujientes-por-fuera.-Receta-tradicional.jpg", quantity: 1
					},
					{
						idProduct: "007", name: "Croquetas de jamon", description: "4uds", price: "8,50€",
						image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBE9n13yJQjYNE63R2318tlwy31FM1BtfHcDKh9_gjcqOoRaI8DSW1SnfCYYtVUR46OC25SNELEVNq6lduyWA10S-dNOz2wH3cJ7vAQL6OaBmVRL6C86EmjDH1gzsNNnLy9D6QdSVX83mQ/s1600/croquetas+de+jamon+3.JPG", quantity: 1
					},
					{
						idProduct: "008", name: "Cesar salad", description: "Lechuga, crutones, pollo, parmesano y salsa cremosa.", price: "11,50",
						image: "https://imag.bonviveur.com/ensalada-cesar-casera.jpg", quantity: 1
					},
				],
				Principales: [
					{
						idProduct: "009", name: "c-Burguer", description: "Lechuga, tomate, 180g de carne queso.", price: "16,00€",
						image: "https://plazaprincipal.com.co/wp-content/uploads/2021/04/SUPER-HAMBUERGUESA-DE-LA-CASA-X-300-GRS-02.jpeg", quantity: 1
					},
					{
						idProduct: "010", name: "Solomillo a la pimienta", description: "Solomillo con salsa aromática de pimienta verde", price: "22,50€",
						image: "https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2015/05/solomillo-con-salsa-de-pimienta.jpg", quantity: 1
					},
					{
						idProduct: "011", name: "Risotto trufado", description: "Arroz cremoso con parmesano y trufa.", price: "19,50€",
						image: "https://content-cocina.lecturas.com/medio/2021/10/19/risotto-de-boletus-con-trufa_c4844e44_1200x1200.jpg", quantity: 1
					},
					{
						idProduct: "012", name: "Bacalao al Pil-Pil", description: "Bacalao en emulsión de ajo, guindilla y aceite", price: "20,50€",
						image: "https://i.ytimg.com/vi/tQXLOFzrIKw/maxresdefault.jpg", quantity: 1
					},
				],
				Postres: [
					{
						idProduct: "013", name: "Cheesecake", description: "Cremoso con mermelada de frutos arandanos.", price: "6,50€",
						image: "https://lacocinademimadre.es/wp-content/uploads/2018/10/tarta-queso.jpg", quantity: 1
					},
					{
						idProduct: "014", name: "Coulant", description: "Bizcocho con centro fundido y helado.", price: "8,00€",
						image: "https://www.cocinatis.com/archivos/202207/CTIS0129-receta-coulant-de-chocolate_large_16x9.jpg", quantity: 1
					},
					{
						idProduct: "015", name: "Tiramisu", description: "Mascarpone, café y bizcochos con cacao.", price: "7,50€",
						image: "https://img.rtve.es/imagenes/receta-tiramisu-trucos-jugoso-facil-rapido/1684846876915.jpg", quantity: 1
					},
					{
						idProduct: "016", name: "Flan casero", description: "Flan cremoso con caramelo líquido.", price: "5,50€",
						image: "https://imag.bonviveur.com/flan-de-huevo-listo-para-degustar.jpg", quantity: 1
					},
				],
			},
			items: [], // Aquí almacenaremos los ítems

			selectedItems: [], // Aquí almacenaremos los productos seleccionados segun cantidad en la tabletMenu
			registerUser: [],
			selectedMenu: [],  // almacenamos el menu seleccionado
			selectedTable: [], // almacenamos la mesa seleccionada
			selectedOrder: [], // almacenamos el pedido seleccionado que esta en el dropdown
			authToken: null, // Añadir token de autenticación
			user: null // Añadir informacion del usuario
		},
		actions: {
			// Ejemplo de función
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// Obtener mensajes desde el backend
			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			// Cambiar color de demo HAY QUE BORRAR ESTO
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},

			// ACCIONES DE REGISTRO DE USUARIO NUEVO restRegister.js

			// Acción para registrar un usuario
			registerUser: async (formData) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/register", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(formData)
					});

					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.message); // Lanza el mensaje del backend
					}

					const data = await response.json();
					return true; // Registro exitoso
				} catch (error) {
					console.error("Error al registrar el usuario:", error.message);
					throw error; // Lanza el error al componente
				}
			},
			/*
								if (response.ok) {
									const data = await response.json();
									console.log("Usuario registrado exitosamente:", data);
									return true;
								} else {
									console.error("Error al registrar el usuario");
									return false;
								}
							} catch (error) {
								console.error("Error al registrar el usuario:", error);
								return false;
							}
						},
			*/
			//accion para taer todos los usuarios

			getAllUsers: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/users", {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ registerUser: data });

						console.log("Datos de usuarios cargados exitosamente:", data);
						return data;
					} else {
						console.error("Error al cargar los datos de usuarios");
						return null;
					}
				} catch (error) {
					console.error("Error al cargar los datos de usuarios:", error);
					return null;
				}
			},

			// Acción para obtener los datos de un usuario por ID

			getUserById: async (userId) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/user/${userId}`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							//		"Authorization": `Bearer ${store.authToken}` // Incluir el token
						}
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ user: data });
						console.log("Datos del usuario cargados exitosamente:", data);
						return data;
					} else {
						console.error("Error al cargar los datos del usuario");
						return null;
					}
				} catch (error) {
					console.error("Error al cargar los datos del usuario:", error);
					return null;
				}
			},
			/*			getUserById: async (userId) => {
							try {
								const response = await fetch(process.env.BACKEND_URL + "${userId}", {
									method: "GET",
									headers: {
										"Content-Type": "application/json"
									}
								});
			
								if (response.ok) {
									const data = await response.json();
									setStore({ user: data });
									console.log("Datos del usuario cargados exitosamente:", data);
									return data;
								} else {
									console.error("Error al cargar los datos del usuario");
									return null;
								}
							} catch (error) {
								console.error("Error al cargar los datos del usuario:", error);
								return null;
							}
						},
			*/
			// Acción para actualizar los datos de un usuario

			updateUser: async (userId, formData) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/user/${userId}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(formData)
					});

					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.message); // Lanza el mensaje de error
					}

					const data = await response.json();
					console.log("Usuario actualizado exitosamente:", data);
					return true; // Retorna éxito
				} catch (error) {
					console.error("Error al actualizar el usuario:", error.message);
					throw error; // Lanza el error al componente
				}
			},

			/*
								if (response.ok) {
									const data = await response.json();
									setStore({ user: data });
									console.log("Usuario actualizado exitosamente:", data);
									return true;
								} else {
									console.error("Error al actualizar el usuario");
									return false;
								}
							} catch (error) {
								console.error("Error al actualizar el usuario:", error);
								return false;
							}
						},
			*/
			// Acción para eliminar un usuario por ID
			deleteUser: async (userId) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/user/${userId}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						console.log("Usuario eliminado exitosamente");
						return true;
					} else {
						console.error("Error al eliminar el usuario");
						return false;
					}
				} catch (error) {
					console.error("Error al eliminar el usuario:", error);
					return false;
				}
			},

			//------Accion para cargar la seleccion de la mesa---------------------------------

			addSelectedTable: (table) => {
				const store = getStore();
				setStore({ selectedTable: table }); // Añade el ítem al estado global

			},

			//------Accion para cargar la seleccion del menu---------------------------------

			addSelectedMenu: (menu) => {
				const store = getStore();
				setStore({ selectedMenu: menu }); // Añade el ítem al estado global

			},

//----------Accion para "cargar" la cantidad de los productos q se seleccionan en la tablet y se vean en el dropdown

			addSelectedItems: (item) => {
				const store = getStore();
				const existingItem = store.selectedItems.find(i => i.idProduct === item.idProduct);

				if (existingItem) {
					// Si el producto ya existe, actualiza la cantidad
					const updatedItems = store.selectedItems.map(i =>
						i.idProduct === item.idProduct
							? { ...i, quantity: parseInt(i.quantity) + parseInt(item.quantity) }
							: i
					);
					setStore({ selectedItems: updatedItems });
				} else {
					// Si no existe, agrégalo
					setStore({ selectedItems: [...store.selectedItems, item] });
				}
			},

		//------Accion para cargar el pedido seleccionado del dropdown al comedor---------
		// Enviar pedido a cocina (para Mesa 01)

		// Acción para enviar pedidos a una mesa específica
		sendOrderToTable: (table) => {
			const store = getStore();
			const currentOrders = store.tablesOrders[table] || [];
			setStore({
				tablesOrders: {
					...store.tablesOrders,
					[table]: [...currentOrders, ...store.selectedItems],
				},
				selectedItems: [], // Limpia el dropdown después de enviar
			});
		},

		// Acción para cerrar los pedidos de una mesa
		clearTableOrders: (table) => {
			const store = getStore();
			setStore({
				tablesOrders: {
					...store.tablesOrders,
					[table]: [], // Borra los pedidos de la mesa especificada
				},
			});
		},

		//--------------------------------------------------------------------------------
		// ACCIONES DE LA PAGINA DE menuItems.js

		// Agregar una nueva mesa
		addTable: (tableName) => {
			const store = getStore();
			setStore({ tables: [...store.tables, tableName] });
		},

		// Agregar un nuevo ítem
		addItem: (item) => {
			const store = getStore();
			setStore({ items: [...store.items, item] }); // Añade el ítem al estado global

		},

		//ACCIONES DE LA PAGINA DE preLogin.js

		loginUser: async (username, password) => {
			try {
				const response = await fetch(process.env.BACKEND_URL + "api/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, password })
				});

				if (response.ok) {
					const data = await response.json();
					setStore({ authToken: data.access_token, user: data.user });
					localStorage.setItem("authToken", data.access_token); // Guarda el token en el almacenamiento local
					localStorage.setItem("user", JSON.stringify(data.user)); // Guarda los datos del usuario
					console.log("Login successful!", data);
					return true; // Indica éxito en el inicio de sesión 
				} else {
					console.log("Login failed!");
					return false; // Indica fracaso en el inicio de sesión 
				}
			} catch (error) {
				console.error("Error logging in", error);
				return false;
			}
		}
	}
};
};

export default getState;