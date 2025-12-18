package org.example.projectweb.model;

import org.example.projectweb.dao.ImageProductDao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Product implements Serializable {
    private int pid;
    private String name;
    private String producer;
    private String type;
    private String material;
    private String style;
    private String description;
    private String status;

    private List<ProductVariant> variants;
    private List<ImageProduct> images;

    public Product(int pid, String name, String producer, String type, String material, String style, String description, String status) {
        this.pid = pid;
        this.name = name;
        this.producer = producer;
        this.type = type;
        this.material = material;
        this.style = style;
        this.description = description;
        this.status = status;

        variants = new ArrayList<>();
        images = new ArrayList<>();
    }

    /**
     * Getters
     * @return
     */
    public int getPid() {
        return this.pid;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getProducer() {
        return producer;
    }

    public String getType() {
        return type;
    }

    public String getMaterial() {
        return material;
    }

    public String getStyle() {
        return style;
    }

    public  String getStatus() {
        return status;
    }

    public List<ProductVariant> getVariants() {
        return variants;
    }

    public List<ImageProduct> getImages() {
        return images;
    }


    /**
     * Setters
     * @param variants
     */
    public void setVariants(List<ProductVariant> variants) {
        this.variants = variants;
    }

    public void setImages(List<ImageProduct> images) {
        this.images = images;
    }

    /**
     * Special getters
     * @return
     */
    public ImageProduct getMainImage() {
        if (images == null)
            return null;
        for (ImageProduct img : images) {
            if (img.isMain())
                return img;
        }
        return null;
    }
}
