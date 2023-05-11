import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
 
export default function useProducts() {
    const productt = ref([])
    const products = ref([])
    const productId = ref([])
 
    const errors = ref('')
    const router = useRouter()
 
    const getProducts = async () => {
        let response = await axios.get('http://127.0.0.1:8000/products')
        products.value = response.data
    }
 
    const showClient = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/product/${id}`)
        productt.value = response.data
    }

    const searchProduct = async (data) => {
        const result = await axios.get(`http://127.0.0.1:8000/product`, { params: { keyword: data } })
        return result;
    }
 
    const storeProduct = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/products/post', data)
            await router.push({ name: 'home' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
 
    }
 
    const updateProduct = async (id,product) => {
        errors.value = ''
        try {
            await axios.put(`http://127.0.0.1:8000/products/post/${id}`, product)
            await router.push({ name: 'home' })
        } catch (e) {
            // if (e.response.status === 422) {
            //     for (const key in e.response.data.errors) {
            //         errors.value += e.response.data.errors[key][0] + ' ';
            //     }
            // }
            console.log("Thap bai")
        }
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/products/post/${id}`);
        await router.push({ name: 'home' });
    }
 
    return {
        errors,
        productt,
        products,
        searchProduct,
        getProducts,
        storeProduct,
        showClient,
        updateProduct,
        deleteProduct
    }
}
