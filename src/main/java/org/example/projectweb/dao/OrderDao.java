package org.example.projectweb.dao;

public class OrderDao extends BaseDao {

    public boolean hasPurchased(int userId, int productId) {
        return get().withHandle(h -> h.createQuery("""
                        select exists (select 1
                            from `order` o join order_detail od on o.oid = od.oid
                            join product_variant pv on od.pvid = pv.pvid
                            where o.uid = :uid and pv.pid = :pid)
                        """)
                .bind("uid", userId).bind("pid", productId)
                .mapTo(Boolean.class).first());
    }
}
