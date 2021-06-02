/*
Lộ Trình:
1. Tạo git,npm init + set up bootstrap + lite.

*/

2/6
/* Grid:
1. dùng lưới cần bỏ vào class="row".
2. Muốn 2 cái input,div  cùng 1 hàng -> dùng bỏ vào vùng div + class.
3. Muốn 1 div đọc lập NẰM TRÊN 1 DÒNG ko bị vùng khác chèn col-12.
! tùy vào kích thước màn hình class col,col-sm,md có hd ko.

  <div class="form-group row">
        <label for="phone" class="col-12 col-md-3 col-form-label">Contact Tel.</label>
        
        <div class="col-3 col-md-3">
            <input type="text" class="form-control" id="phone" name="phone" placeholder="Tel Phone">
        </div>
        <div class="col col-md">
            <input type="text" class="form-control" id="phone" name="phone" placeholder="Tel Phone">
        </div>
        
    </div>
*/