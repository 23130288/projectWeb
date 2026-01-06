package org.example.projectweb.service;

import org.example.projectweb.dao.ImageProductDao;
import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.dao.ProductVariantDao;
import org.example.projectweb.model.ImageProduct;
import org.example.projectweb.model.Product;
import org.example.projectweb.model.ProductVariant;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ProductService {
    private ProductDao pDao = new ProductDao();
    private ProductVariantDao pvDao = new ProductVariantDao();
    private ImageProductDao ipDao = new ImageProductDao();

    public boolean addProduct(String name, String type, String style, String material, String producer, String status, String description) {
        // Check Product đã tồn tại
        if (pDao.getProductByName(name) != null) {
            return false;
        }

        // Tạo Product mới
        pDao.addProduct(name, type, style, material, producer, status, description);
        return true;
    }

    public List<Product> getAllProducts() {
        return pDao.getListProduct();
    }

    public List<ProductVariant> getAllProductsVariants() {
        List<Integer> lsPID = pDao.getListProductID();

        List<ProductVariant> re = new ArrayList<>();
        for (Integer pid : lsPID) {
            List<ProductVariant> tmp = getVariantsByPid(pid);
            if (tmp != null) re.addAll(tmp);
        }
        return re;
    }

    public Map<Integer, String> getProductNameMap() {
        return pDao.getProductNameMap();
    }

    public Product getProductById(int productId) {
        return pDao.getProductById(productId);
    }

    public ProductVariant getVariantByPvid(int pvid) {
        return pvDao.getVariantByPvid(pvid);
    }

    public List<ProductVariant> getVariantsByPid(int productId) {
        return pvDao.getVariantsForAdmin(productId);
    }

    public List<ImageProduct> getImgsByPid(int productId) {
        return ipDao.getImagesByProductId(productId);
    }

    public ImageProduct getMainImg(int productId) {
        return ipDao.getMainImageByProductId(productId);
    }

    public Product getProductDetail(int productId) {
        Product p = pDao.getProductById(productId);
        if (p == null) return null;
        p.setVariants(pvDao.getVariantsByProductId(productId));
        p.setImages(ipDao.getImagesByProductId(productId));
        return p;
    }

    public List<Product> searchProducts(String keyword) {
        List<Product> results = pDao.searchByName(keyword);
        for (Product p : results) {
            p.setVariants(pvDao.getVariantsByProductId(p.getPid()));
            p.setImages(ipDao.getImagesByProductId(p.getPid()));
        }
        return results;
    }

    public List<Product> searchInFilter(String query, String category, String sort) {
        List<Product> list = pDao.searchInFilter(query, category, sort);
        for (Product p : list) {
            p.setVariants(pvDao.getVariantsByProductId(p.getPid()));
            p.setImages(ipDao.getImagesByProductId(p.getPid()));
        }
        return list;
    }
}
