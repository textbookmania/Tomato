/**
 * Created by mike on 11/19/2015.
 */
var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
  stores: [imageStore]
});

Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});