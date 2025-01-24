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
					{
						idProduct: "042", name: "Tortilla de Patatas", description: "Tortilla española con cebolla y patatas", price: "6,00€",
						image: "https://www.gerardcoma.com/wp-content/uploads/2024/07/tortilla-de-patats.jpg", quantity: 1
					},
					{
						idProduct: "043", name: "Sopa de Ajo", description: "Sopa castellana con ajo, pan y huevo escalfado", price: "5,00€",
						image: "https://s3.abcstatics.com/abc/sevilla/media/gurmesevilla/2013/02/sopa-ajo-castellana.jpg", quantity: 1
					},
					{
						idProduct: "044", name: "Callos a la Madrileña", description: "Callos guisados con chorizo y morcilla", price: "8,50€",
						image: "https://static.wixstatic.com/media/3a8b46_0dea844302e940b2a9c7ece6fe1b99f9~mv2.jpg/v1/fill/w_480,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a8b46_0dea844302e940b2a9c7ece6fe1b99f9~mv2.jpg", quantity: 1
					},
					{
						idProduct: "045", name: "Huevos Rotos", description: "Huevos fritos sobre patatas y jamón ibérico", price: "7,50€",
						image: "https://www.aceitesdeolivadeespana.com/wp-content/uploads/2024/03/huevos-rotos-con-jamon.png", quantity: 1
					},
					{
						idProduct: "046", name: "Oreja a la Plancha", description: "Oreja de cerdo a la plancha con ajo y perejil", price: "7,00€",
						image: "https://s1.elespanol.com/2023/02/14/como/741436034_230892244_1706x1280.jpg", quantity: 1
					},
					{
						idProduct: "047", name: "Gambas al Ajillo", description: "Gambas salteadas en aceite de ajo y guindilla", price: "9,00€",
						image: "https://saboratierraymar.es/wp-content/uploads/2024/08/como-hacer-gambas-al-ajillo-en-cazuela-de-barro.jpg", quantity: 1
					},
					{
						idProduct: "048", name: "Pimientos del Piquillo Rellenos", description: "Pimientos rellenos de bacalao o carne", price: "8,00€",
						image: "https://www.pequerecetas.com/wp-content/uploads/2017/09/pimientos-del-piquillo-rellenos-de-bacalao-receta.jpg", quantity: 1
					},
					{
						idProduct: "049", name: "Boquerones en Vinagre", description: "Boquerones marinados en vinagre y ajo", price: "6,50€",
						image: "https://recetasdecocina.elmundo.es/wp-content/uploads/2024/06/boquerones-en-vinagre-receta.jpg", quantity: 1
					},
					{
						idProduct: "050", name: "Torreznos", description: "Crujiente panceta frita al estilo tradicional", price: "5,50€",
						image: "https://www.hogarmania.com/archivos/202401/torreznos-de-soria-1280x720x80xX.jpg", quantity: 1
					},
					{
						idProduct: "051", name: "Cazón en Adobo", description: "Pescado marinado y frito, típico del sur", price: "7,50€",
						image: "https://www.infobae.com/new-resizer/G5REXzUuwVHaUYyGL_mWoMTfvcA=/arc-anglerfish-arc2-prod-infobae/public/4GXOZZLFQBFONL5ZDOHIHJ35LQ.jpg", quantity: 1
					}
					
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
					{
						idProduct: "022", name: "Paella Valenciana", description: "Arroz con mariscos y pollo", price: "12,50€",
						image: "https://cuidateplus.marca.com/sites/default/files/cms/paella-valenciana-receta.jpg", quantity: 1
					},
					{
						idProduct: "023", name: "Patatas al horno", description: "Patatas al horno gratinadas con queso", price: "6,50€",
						image: "https://www.hogarmania.com/archivos/201501/patatas-al-horno-668x400x80xX.jpg", quantity: 1
					},
					{
						idProduct: "024", name: "Gazpacho Andaluz", description: "Sopa fría de tomate y verduras", price: "4,50€",
						image: "https://content-cocina.lecturas.com/medio/2021/03/11/paso-a-paso-para-hacer-gazpacho-andaluz-con-trocitos-de-verduras-resultado-final_afebd712_1200x630.jpg", quantity: 1
					},
					{
						idProduct: "025", name: "Pulpo a la Gallega", description: "Pulpo servido con pimentón y aceite de oliva", price: "14,00€",
						image: "https://cdn.blogsthermomix.es/media/Posts/attachments/5aac55838af65dfb51e9497d2e9c5869.jpg", quantity: 1
					},
					{
						idProduct: "026", name: "Alubiada", description: "Alubias rojas alavesas", price: "8,00€",
						image: "https://www.getariakotxakolina.eus/wp-content/uploads/2020/12/Alubias-de-Tolosa-BLOG.png", quantity: 1
					},
					{
						idProduct: "027", name: "Cochinillo Asado", description: "Tierno cochinillo al horno", price: "18,50€",
						image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Cochinillo_asado-Madrid.jpg", quantity: 1
					},
					{
						idProduct: "028", name: "Calamares a la Romana", description: "Calamares fritos en tempura", price: "10,00€",
						image: "https://www.annarecetasfaciles.com/files/calamares-a-la-romana-scaled.jpg", quantity: 1
					},
					{
						idProduct: "029", name: "Fabada Asturiana", description: "Plato típico con fabes, chorizo y morcilla", price: "11,00€",
						image: "https://imag.bonviveur.com/fabada-asturiana.jpg", quantity: 1
					},
					{
						idProduct: "030", name: "Chuletón", description: "Corte de lomo alto de calidad", price: "5,00€",
						image: "https://www.nimataniengorda.com/wp-content/uploads/2017/01/ChuletonBuey.jpg", quantity: 1
					},
					{
						idProduct: "031", name: "Chuletillas de Cordero", description: "Tarta de almendra tradicional gallega", price: "6,00€",
						image: "https://recetasdecocina.elmundo.es/wp-content/uploads/2023/12/chuletas-de-cordero-a-la-plancha.jpg", quantity: 1
					}
					
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
					{
						idProduct: "032", name: "Crema Catalana", description: "Postre tradicional con crema y caramelo quemado", price: "4,50€",
						image: "https://recetasdecocina.elmundo.es/wp-content/uploads/2023/10/crema-catalana.jpg", quantity: 1
					},
					{
						idProduct: "033", name: "Flan de Huevo", description: "Clásico flan con caramelo líquido", price: "3,50€",
						image: "https://s1.eestatic.com/2015/02/11/cocinillas/cocinillas_10259007_115776427_1706x960.jpg", quantity: 1
					},
					{
						idProduct: "034", name: "Arroz con Leche", description: "Postre de arroz, leche y canela", price: "4,00€",
						image: "https://www.cocinacaserayfacil.net/wp-content/uploads/2018/01/Arroz-con-leche.jpg", quantity: 1
					},
					{
						idProduct: "035", name: "Batido de chocolate", description: "Batido de chocolate con nata", price: "5,50€",
						image: "https://quierochocolate.com/wp-content/uploads/2017/08/batido-chocolate-casero.jpg", quantity: 1
					},
					{
						idProduct: "036", name: "Panna Cotta", description: "Delicada panna cotta de vainilla", price: "4,50€",
						image: "https://assets.epicurious.com/photos/62d6c513077a952f4a8c338c/4:3/w_3668,h_2751,c_limit/PannaCotta_RECIPE_04142022_9822_final.jpg", quantity: 1
					},
					{
						idProduct: "037", name: "Brownie de Chocolate", description: "Brownie con nueces y chocolate fundido", price: "5,00€",
						image: "https://recetasdecocina.elmundo.es/wp-content/uploads/2016/11/brownie-de-chocolate.jpg", quantity: 1
					},
					{
						idProduct: "038", name: "Helado Artesanal", description: "Helado de diferentes sabores", price: "3,50€",
						image: "https://cdn.prod.website-files.com/642f26ea0d34e0594a51fef5/642f26ea0d34e06e2e520136_63e14efcd861144083954869_courtney-cook-QYsRxRPygwU-unsplash.jpg", quantity: 1
					},
					{
						idProduct: "039", name: "Profiteroles", description: "Bollos rellenos de crema y chocolate", price: "4,00€",
						image: "https://i.blogs.es/de2f7d/profiteroles/840_560.jpg", quantity: 1
					},
					{
						idProduct: "040", name: "Yogur casero con fresas", description: "Yogur casero con trozitos de fresas cortadas", price: "5,50€",
						image: "https://img-global.cpcdn.com/recipes/4bc336e297885603/1200x630cq70/photo.jpg", quantity: 1
					},
					{
						idProduct: "041", name: "Fruta de Temporada", description: "Selección de fruta fresca de temporada", price: "3,00€",
						image: "https://www.alinur.es/wp-content/uploads/2021/05/fruta.varidad.jpeg", quantity: 1
					}					
				],
				Bebidas: [
					{
						idProduct: "001", name: "Agua", description: "1L", price: "2,50€",
						image: "https://financialfood.es/wp-content/uploads/2024/04/Solan-de-Cabras_Campana-220424.jpg", quantity: 1
					},
					{
						idProduct: "002", name: "Cerveza", description: "33Cl", price: "3,00€",
						image: "https://ambar.com/wp-content/uploads/2019/05/Cerveza-scaled.jpg", quantity: 1
					},
					{
						idProduct: "003", name: "Fanta Limon", description: "33Cl", price: "2,50€",
						image: "https://148603807.cdn6.editmysite.com/uploads/1/4/8/6/148603807/s940416327557988909_p34_i2_w500.png", quantity: 1
					},
					{
						idProduct: "004", name: "Aquarius", description: "33Cl", price: "2,50€",
						image: "https://m.media-amazon.com/images/I/415L5IQwk1L._AC_SY350_.jpg", quantity: 1
					},
					{
						idProduct: "017", name: "Coca cola ZERO", description: "33Cl", price: "3,00€",
						image: "https://st4.depositphotos.com/1010386/22266/i/450/depositphotos_222667692-stock-photo-london-august-2018-plastic-bottle.jpg", quantity: 1
					},
					{
						idProduct: "018", name: "Coca-cola", description: "33Cl", price: "2,80€",
						image: "https://media01.stockfood.com/largepreviews/NTg4NzU4Mg==/00189922-A-glass-of-Coca-Cola.jpg", quantity: 1
					},
					{
						idProduct: "019", name: "Vino blanco", description: "D.O Rueda", price: "4,75€",
						image: "https://cdn0.uncomo.com/es/posts/7/5/6/tipos_de_vino_blanco_41657_600.jpg", quantity: 1
					},
					{
						idProduct: "020", name: "Vino tinto", description: "D.O Rioja", price: "5,00€",
						image: "https://fishsolutions.pescanova.es/wp-content/uploads/2022/04/formacion-vinos-copa-fish-solutions.jpg", quantity: 1
					},
					{
						idProduct: "021", name: "Vino rosado", description: "D.O Penedes", price: "4,50€",
						image: "https://www.campusdelvino.com/media/k2/items/cache/b8292acafd72142128a3481ac4b0abff_XL.jpg", quantity: 1
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

			uploadImageUser: async (file) => {
				try {
					const formData = new FormData();
					formData.append("file", file);

					const response = await fetch(process.env.BACKEND_URL + "upload-image", {
						method: "POST",

						body: formData
					});

					if (response.ok) {

						const data = await response.json();
						console.log("Imagen subida exitosamente:", data); // viejo

						await getActions().updateUserProfileImage(data.url); // nuevo
						return data.url;  //nuevo

						//
					} else {
						console.error("Error al subir la imagen");
					}
				} catch (error) {
					console.error("Error al subir la imagen:", error);
				}
			},

			// Acción para actualizar la imagen de perfil del usuario   NUEVO CODIGO

			updateUserProfileImage: async (imageUrl) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}update-user-image`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Incluir el token
						},
						body: JSON.stringify({ profile_image: imageUrl })
					});

					if (response.ok) {
						const data = await response.json();
						// Update the user data in the store
					
						
						setStore({ user: { ...store.user, image: imageUrl } });
						return data;
					}
				} catch (error) {
					console.error("Error updating user image:", error);
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