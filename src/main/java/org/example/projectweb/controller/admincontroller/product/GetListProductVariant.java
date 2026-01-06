package org.example.projectweb.controller.admincontroller.product;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.projectweb.model.ProductVariant;
import org.example.projectweb.service.ProductService;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@WebServlet(name = "GetListProductVariant", value = "/admin/Product_Variant_load")
public class GetListProductVariant extends HttpServlet {

    final ProductService productService = new ProductService();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        response.setContentType("application/json;charset=UTF-8");

        List<ProductVariant> ProductVariants = productService.getAllProductsVariants();
        Map<Integer, String> productNameMap = productService.getProductNameMap();
        JsonArray jsonArray = new JsonArray();

        for (ProductVariant pv : ProductVariants) {
            JsonObject obj = (JsonObject) JsonParser.parseString(new Gson().toJson(pv));
            obj.addProperty("productName", productNameMap.get(pv.getPid()));
            jsonArray.add(obj);
        }

        response.getWriter().write(jsonArray.toString());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}